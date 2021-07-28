import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    {
        label: 'Navigation',
        isTitle: true
    },
    {
        label: 'Dashboard',
        icon: 'home',
        link: '/',
        badge: {
            variant: 'success',
            text: '1',
        }
    },
    {
        label: 'Apps',
        isTitle: true
    },
    {
        label: 'Master data',
        icon: '',
        subItems: [
            {
                label: 'Service provider',
                link: '/apps/service-provider',
            },
            {
                label: 'Sub types',
                link: '/apps/sub-types',
            },
            {
                label: 'Appointment status',
                link: '/apps/appointment-status'
            },
            {
                label: 'Job-queue',
                link: '/apps/job-queue-status'
            },
            {
                label: 'Job-status',
                link: '/apps/job-status'
            },
            {
                label: 'Job-type',
                link: '/apps/job-types'
            },
            {
                label: 'Paid-status',
                link: '/apps/paid-status'
            },
            {
                label: 'Payment method',
                link: '/apps/payment-method'
            }
        ]
    },
    {
        label: 'Appointment',
        icon: '',
        subItems: [
            {
                label: 'View appointments',
                link: '/appointment/appointment',
            },
            {
                label: 'Appointments',
                link: '/apps/appointments'
            }
            // {
            //     label: 'Compose',
            //     link: '/apps/email-compose'
            // },
        ]
    }
    // {
    //     label: 'Email',
    //     icon: 'inbox',
    //     subItems: [
    //         {
    //             label: 'Inbox',
    //             link: '/apps/email-inbox',
    //         },
    //         {
    //             label: 'Read',
    //             link: '/apps/email-read'
    //         },
    //         {
    //             label: 'Compose',
    //             link: '/apps/email-compose'
    //         },
    //     ]
    // },
    // {
    //     label: 'Project',
    //     icon: 'briefcase',
    //     subItems: [
    //         {
    //             label: 'List',
    //             link: '/apps/project-list',
    //         },
    //         {
    //             label: 'Detail',
    //             link: '/apps/project-detail',
    //         },
    //     ]
    // },
    // {
    //     label: 'Tasks',
    //     icon: 'bookmark',
    //     subItems: [
    //         {
    //             label: 'List',
    //             link: '/apps/task-list',
    //         },
    //         {
    //             label: 'Kanban Board',
    //             link: '/apps/task-board',
    //         },
    //     ]
    // },
    // {
    //     label: 'Custom',
    //     isTitle: true
    // },
    // {
    //     label: 'Pages',
    //     icon: 'file-text',
    //     subItems: [
    //         {
    //             label: 'Starter',
    //             link: '/other/pages-starter'
    //         },
    //         {
    //             label: 'Profile',
    //             link: '/other/pages-profile'
    //         },
    //         {
    //             label: 'Activity',
    //             link: '/other/pages-activity'
    //         },
    //         {
    //             label: 'Invoice',
    //             link: '/other/pages-invoice'
    //         },
    //         {
    //             label: 'Pricing',
    //             link: '/other/pages-pricing'
    //         },
    //         {
    //             label: 'Error 404',
    //             link: '/other/pages-error-404'
    //         },
    //         {
    //             label: 'Error 500',
    //             link: '/other/pages-error-500'
    //         },
    //     ]
    // },
    // {
    //     label: 'components',
    //     isTitle: true
    // },
    // {
    //     label: 'UI Elements',
    //     icon: 'package',
    //     subItems: [
    //         {
    //             label: 'Bootstrap UI',
    //             link: '/ui/bootstrap'
    //         },
    //         {
    //             label: 'Icons',
    //             link: '/ui/icons',
    //             subItems: [
    //                 {
    //                     label: 'Feather Icons',
    //                     link: '/ui/icon-feather'
    //                 },
    //                 {
    //                     label: 'Unicons Icons',
    //                     link: '/ui/icon-unicons'
    //                 },
    //             ]
    //         },
    //         {
    //             label: 'Widgets',
    //             link: '/ui/widgets'
    //         }
    //     ]
    // },
    // {
    //     label: 'Forms',
    //     link: '/ui/form',
    //     icon: 'file-text',
    //     subItems: [
    //         {
    //             label: 'Basic Elements',
    //             link: '/ui/forms-basic'
    //         },
    //         {
    //             label: 'Advanced',
    //             link: '/ui/forms-advanced'
    //         },
    //         {
    //             label: 'Validation',
    //             link: '/ui/forms-validation'
    //         },
    //         {
    //             label: 'Wizard',
    //             link: '/ui/forms-wizard'
    //         },
    //         {
    //             label: 'Editor',
    //             link: '/ui/forms-editor'
    //         },
    //         {
    //             label: 'File Uploads',
    //             link: '/ui/forms-uploads'
    //         },
    //     ]
    // },
    // {
    //     label: 'Charts',
    //     link: '/ui/charts',
    //     icon: 'pie-chart'
    // },
    // {
    //     label: 'Tables',
    //     link: '/ui/tables',
    //     icon: 'grid',
    //     subItems: [
    //         {
    //             label: 'Basic',
    //             link: '/ui/tables-basic'
    //         },
    //         {
    //             label: 'Advanced',
    //             link: '/ui/tables-advanced'
    //         },
    //     ]
    // }
];
