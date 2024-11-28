import * as THREE from "three";

export class ParticleSystem {
  private particleList: any = { first: null };
  private recycleBin: any = { first: null };
  private context: CanvasRenderingContext2D;
  private displayWidth: number;
  private displayHeight: number;
  private sphereRad: number = 280;
  private fLen: number = 320;
  private projCenterX: number;
  private projCenterY: number;
  private zMax: number;
  private turnAngle: number = 0;
  private turnSpeed: number = (2 * Math.PI) / 1200;
  private sphereCenterX: number = 0;
  private sphereCenterY: number = 0;
  private sphereCenterZ: number;
  private particleRad: number = 2.5;
  private zeroAlphaDepth: number = -750;
  private rgbString: string;

  constructor(
    context: CanvasRenderingContext2D,
    width: number,
    height: number,
  ) {
    this.context = context;
    this.displayWidth = width;
    this.displayHeight = height;
    this.projCenterX = this.displayWidth / 2;
    this.projCenterY = this.displayHeight / 2;
    this.zMax = this.fLen - 2;
    this.sphereCenterZ = -3 - this.sphereRad;
    // Updated to use the quantum purple color
    this.rgbString = "rgba(123,44,191,";
  }

  public update() {
    this.turnAngle = (this.turnAngle + this.turnSpeed) % (2 * Math.PI);
    const sinAngle = Math.sin(this.turnAngle);
    const cosAngle = Math.cos(this.turnAngle);

    // Clear background with transparency
    this.context.clearRect(0, 0, this.displayWidth, this.displayHeight);

    // Update and draw particles
    let p = this.particleList.first;
    while (p != null) {
      const nextParticle = p.next;

      p.age++;

      if (p.age > p.stuckTime) {
        this.updateParticlePosition(p);
      }

      const { rotX, rotZ } = this.calculateRotation(p, sinAngle, cosAngle);
      const m = this.fLen / (this.fLen - rotZ);
      p.projX = rotX * m + this.projCenterX;
      p.projY = p.y * m + this.projCenterY;

      this.updateParticleAlpha(p);

      const outsideTest = this.isParticleOutside(p, rotZ);

      if (outsideTest || p.dead) {
        this.recycle(p);
      } else {
        this.drawParticle(p, rotZ, m);
      }

      p = nextParticle;
    }
  }

  public addParticles(count: number) {
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(Math.random() * 2 - 1);
      const x0 = this.sphereRad * Math.sin(phi) * Math.cos(theta);
      const y0 = this.sphereRad * Math.sin(phi) * Math.sin(theta);
      const z0 = this.sphereRad * Math.cos(phi);

      const particle = this.addParticle(
        x0,
        this.sphereCenterY + y0,
        this.sphereCenterZ + z0,
        0.002 * x0,
        0.002 * y0,
        0.002 * z0,
      );

      this.initializeParticle(particle);
    }
  }

  private updateParticlePosition(p: any) {
    const randAccel = 0.1;
    p.velX += p.accelX + randAccel * (Math.random() * 2 - 1);
    p.velY += p.accelY + randAccel * (Math.random() * 2 - 1);
    p.velZ += p.accelZ + randAccel * (Math.random() * 2 - 1);

    p.x += p.velX;
    p.y += p.velY;
    p.z += p.velZ;
  }

  private calculateRotation(p: any, sinAngle: number, cosAngle: number) {
    const rotX = cosAngle * p.x + sinAngle * (p.z - this.sphereCenterZ);
    const rotZ =
      -sinAngle * p.x +
      cosAngle * (p.z - this.sphereCenterZ) +
      this.sphereCenterZ;
    return { rotX, rotZ };
  }

  private updateParticleAlpha(p: any) {
    if (p.age < p.attack + p.hold + p.decay) {
      if (p.age < p.attack) {
        p.alpha =
          ((p.holdValue - p.initValue) / p.attack) * p.age + p.initValue;
      } else if (p.age < p.attack + p.hold) {
        p.alpha = p.holdValue;
      } else {
        p.alpha =
          ((p.lastValue - p.holdValue) / p.decay) *
            (p.age - p.attack - p.hold) +
          p.holdValue;
      }
    } else {
      p.dead = true;
    }
  }

  private isParticleOutside(p: any, rotZ: number): boolean {
    return (
      p.projX > this.displayWidth ||
      p.projX < 0 ||
      p.projY < 0 ||
      p.projY > this.displayHeight ||
      rotZ > this.zMax
    );
  }

  private drawParticle(p: any, rotZ: number, m: number) {
    let depthAlphaFactor = 1 - rotZ / this.zeroAlphaDepth;
    depthAlphaFactor = Math.max(0, Math.min(1, depthAlphaFactor));

    this.context.fillStyle = this.rgbString + depthAlphaFactor * p.alpha + ")";
    this.context.beginPath();
    this.context.arc(
      p.projX,
      p.projY,
      m * this.particleRad,
      0,
      2 * Math.PI,
      false,
    );
    this.context.closePath();
    this.context.fill();
  }

  private addParticle(
    x0: number,
    y0: number,
    z0: number,
    vx0: number,
    vy0: number,
    vz0: number,
  ) {
    let newParticle = this.recycleBin.first;

    if (newParticle) {
      this.recycleBin.first = newParticle.next;
      if (this.recycleBin.first) this.recycleBin.first.prev = null;
    } else {
      newParticle = {};
    }

    if (!this.particleList.first) {
      this.particleList.first = newParticle;
      newParticle.prev = null;
      newParticle.next = null;
    } else {
      newParticle.next = this.particleList.first;
      this.particleList.first.prev = newParticle;
      this.particleList.first = newParticle;
      newParticle.prev = null;
    }

    newParticle.x = x0;
    newParticle.y = y0;
    newParticle.z = z0;
    newParticle.velX = vx0;
    newParticle.velY = vy0;
    newParticle.velZ = vz0;
    newParticle.age = 0;
    newParticle.dead = false;
    newParticle.right = Math.random() < 0.5;

    return newParticle;
  }

  private initializeParticle(p: any) {
    p.attack = 50;
    p.hold = 50;
    p.decay = 100;
    p.initValue = 0;
    p.holdValue = 1;
    p.lastValue = 0;
    p.stuckTime = 90 + Math.random() * 20;
    p.accelX = 0;
    p.accelY = 0;
    p.accelZ = 0;
  }

  private recycle(p: any) {
    if (this.particleList.first === p) {
      if (p.next) {
        p.next.prev = null;
        this.particleList.first = p.next;
      } else {
        this.particleList.first = null;
      }
    } else {
      if (p.next === null) {
        p.prev.next = null;
      } else {
        p.prev.next = p.next;
        p.next.prev = p.prev;
      }
    }

    if (!this.recycleBin.first) {
      this.recycleBin.first = p;
      p.prev = null;
      p.next = null;
    } else {
      p.next = this.recycleBin.first;
      this.recycleBin.first.prev = p;
      this.recycleBin.first = p;
      p.prev = null;
    }
  }
}
