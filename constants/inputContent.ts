import { LockKeyhole, Mail, Phone, User } from "lucide-react-native";

export const inputContent = {
  email: {
    icon: Mail,
  },
  password: {
    icon: LockKeyhole,
  },
  number: {
    icon: Phone,
  },
  name: {
    icon: User,
  },
} as const;
