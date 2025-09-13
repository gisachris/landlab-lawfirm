import React from 'react';
import {
  Briefcase,
  Users,
  Shield,
  Building,
  FileText,
  Scale,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  X,
  Quote,
  Star,
  ArrowRight,
  Award,
  GraduationCap,
  Target,
  Menu,
  ChevronLeft,
  ChevronRight,
  Linkedin,
  Globe
} from 'lucide-react';

// Icon mapping object - maps string names to Lucide React components
const iconMap: Record<string, React.ComponentType<any>> = {
  Briefcase,
  Users,
  Shield,
  Building,
  FileText,
  Scale,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  X,
  Quote,
  Star,
  ArrowRight,
  Award,
  GraduationCap,
  Target,
  Menu,
  ChevronLeft,
  ChevronRight,
  Linkedin,
  Globe
};

/**
 * Get a Lucide React icon component by its string name
 * @param iconName - The string name of the icon (e.g., "Briefcase", "Phone")
 * @param props - Props to pass to the icon component (e.g., className, size)
 * @returns JSX element of the icon or null if not found
 */
export const getIconComponent = (iconName: string, props?: any): React.ReactElement | null => {
  const IconComponent = iconMap[iconName];
  
  if (!IconComponent) {
    console.warn(`Icon "${iconName}" not found in iconMap`);
    return null;
  }
  
  return <IconComponent {...props} />;
};

/**
 * Check if an icon exists in the mapping
 * @param iconName - The string name of the icon
 * @returns boolean indicating if the icon exists
 */
export const hasIcon = (iconName: string): boolean => {
  return iconName in iconMap;
};

/**
 * Get all available icon names
 * @returns Array of all available icon names
 */
export const getAvailableIcons = (): string[] => {
  return Object.keys(iconMap);
};