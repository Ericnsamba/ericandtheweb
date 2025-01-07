import { usePathname } from 'next/navigation';

export const usePageTitle = () => {
  const pathname = usePathname();
  
  // Remove leading slash and capitalize first letter
  const formatPathname = (path: string) => {
    if (path === '/') return '';
    
    const cleanPath = path.slice(1); // Remove leading slash
    return cleanPath
      .split('/')
      .map(segment => segment.charAt(0).toUpperCase() + segment.slice(1))
      .join(' / ');
  };

  return formatPathname(pathname);
}; 