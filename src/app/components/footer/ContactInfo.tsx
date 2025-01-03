import { Mail, Phone, MapPin } from 'lucide-react';
import type { ContactInfo as ContactInfoType } from './types';

export const ContactInfo = ({ email, phone, address }: ContactInfoType) => (
  <div className="space-y-3 text-sm text-gray-600">
    <div className="flex items-center gap-2">
      <Mail className="h-4 w-4" />
      <a href={`mailto:${email}`} className="hover:text-indigo-600">
        {email}
      </a>
    </div>
    <div className="flex items-center gap-2">
      <Phone className="h-4 w-4" />
      <a href={`tel:${phone}`} className="hover:text-indigo-600">
        {phone}
      </a>
    </div>
    <div className="flex items-start gap-2">
      <MapPin className="h-4 w-4 mt-1" />
      <div>
        {address.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>
    </div>
  </div>
);