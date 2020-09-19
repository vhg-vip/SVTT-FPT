interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

// app-sidebar-nav-link
export const navItems: NavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'FPT'
    }
  },
  // {
  //   title: true,
  //   name: 'Menu cấp 1'
  // },
  // {
  //   name: 'Colors',
  //   url: '/theme/colors',
  //   icon: 'icon-drop'
  // },
  // {
  //   name: 'Typography',
  //   url: '/theme/typography',
  //   icon: 'icon-pencil'
  // },
  // {
  //   title: true,
  //   name: 'Menu cấp 1'
  // },
  {
    name: 'Menu cấp 2',
    url: '/base',
    icon: 'icon-puzzle',
    divider: false,
    children: [
      {
        name: 'menu câp 3',
        url: '/base/cards',
        icon: 'icon-puzzle'
      },
      {
        name: 'menu câp 3',
        url: '/base/carousels',
        icon: 'icon-puzzle'
      },
      {
        name: 'menu table',
        url: '/base/table',
        icon: 'icon-cursor'
      },
      {
        name: 'vendor',
        url: '/base/vendor',
        icon: 'icon-puzzle'
      },
      {
        name: 'webcam',
        url: '/base/webcam',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'menu cấp 2',
    url: '/buttons',
    icon: 'icon-cursor',
    divider: false,
    children: [
      {
        name: 'menu cấp 2.1',
        url: '/buttons/buttons',
        icon: 'icon-cursor'
      },
      {
        name: 'menu cấp 2.3',
        url: '/buttons/dropdowns',
        icon: 'icon-cursor'
      }
    ]
  },
  {
    name: 'Disabled',
    url: '/dashboard',
    icon: 'icon-ban',
    badge: {
      variant: 'secondary',
      text: 'FPT'
    },
    attributes: { disabled: true },
  }
];



