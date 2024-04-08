'use client';
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/ui/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/ui/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/ui/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}

// 'use client';
// import React, { useState } from 'react';
// import {
//   UserGroupIcon,
//   HomeIcon,
//   DocumentDuplicateIcon,
//   IdentificationIcon, // Assuming you use this icon for illustration
//   ArchiveBoxIcon,
//   ChevronRightIcon, // Assuming you use this icon for illustration
// } from '@heroicons/react/24/outline';

// const links = [
//   { name: 'Home', href: '/ui/dashboard', icon: HomeIcon },
//   {
//     name: 'Invoices',
//     href: '/ui/dashboard/invoices',
//     icon: DocumentDuplicateIcon,
//     subLinks: [
//       {
//         name: 'Invoice 1',
//         href: '/ui/dashboard/invoices/invoice1',
//         icon: IdentificationIcon,
//       },
//       {
//         name: 'Invoice 2',
//         href: '/ui/dashboard/invoices/invoice2',
//         icon: ArchiveBoxIcon,
//       },
//     ],
//   },
//   { name: 'Customers', href: '/ui/dashboard/customers', icon: UserGroupIcon },
// ];

// export default function NavLinks() {
//   const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
//   const toggleSubMenu = (name: string | null) => {
//     if (openSubMenu === name) {
//       setOpenSubMenu(null);
//     } else {
//       setOpenSubMenu(name);
//     }
//   };

//   return (
//     <>
//       {links.map((link) => {
//         const LinkIcon = link.icon;
//         return (
//           <div key={link.name}>
//             <a
//               href={link.href}
//               className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
//             >
//               <LinkIcon className="w-6" />
//               <p className="hidden md:block">{link.name}</p>
//               {link.subLinks && (
//                 <button
//                   onClick={() => toggleSubMenu(link.name)}
//                   className="ml-auto"
//                 >
//                   <ChevronRightIcon
//                     className={`w-5 transform transition-transform ${
//                       openSubMenu === link.name ? 'rotate-90' : ''
//                     }`}
//                   />
//                 </button>
//               )}
//             </a>
//             {link.subLinks && openSubMenu === link.name && (
//               <div className="ml-4 border-l border-gray-200 pl-4">
//                 {link.subLinks.map((subLink) => {
//                   const SubLinkIcon = subLink.icon;
//                   return (
//                     <a
//                       key={subLink.name}
//                       href={subLink.href}
//                       className="mt-2 block flex items-center gap-2 rounded-md p-2 text-xs font-medium hover:bg-gray-200"
//                     >
//                       <SubLinkIcon className="w-4" />
//                       <p>{subLink.name}</p>
//                     </a>
//                   );
//                 })}
//               </div>
//             )}
//           </div>
//         );
//       })}
//     </>
//   );
// }
