import { InlineIcon } from "@iconify/react"

const NavLinks = {
    student:[
        {
            lable:'Dashboard',
            path:'/dashboard',
            icon: <InlineIcon icon="mdi-light:view-dashboard" height="25" width="25"/>

        },
        {
            lable:'Account',
            path:'/account',
            icon:<InlineIcon icon="ph:user-light" height="25" width="25"/>
            
        },
        {
            lable:'Video Tutorial',
            path:'/tutstream',
            icon:<InlineIcon icon="ph:video-light" height="25" width="25"/>

        },
        {
            lable:'PDF Notes',
            path:'/notes',
            icon:<InlineIcon icon="solar:notes-minimalistic-line-duotone" height="25" width="25"/>

        },
    ],
    staff:[
        {
            lable:'Dashboard',
            path:'/dashboard',
            icon:<InlineIcon icon="mdi-light:view-dashboard" height="25" width="25"/>

        },
        {
            lable:'Account',
            path:'/account',
            icon:<InlineIcon icon="ph:user-light" height="25" width="25"/>

        },
        {
            lable:'Video Tutorial',
            path:'/tutstream',
            icon:<InlineIcon icon="ph:video-light" height="25" width="25"/>

        },
    ],
    admin:[
        {
            lable:'Dashboard',
            path:'/dashboard',
            icon:<InlineIcon icon="mdi-light:view-dashboard" height="25" width="25"/>

        },
        {
            lable:'Students',
            path:'/studentsaccounts',
            icon:<InlineIcon icon="ph:student-light" height="25" width="25"/>

        },
        {
            lable:'Staff',
            path:'/staffaccounts',
            icon: <InlineIcon icon="healthicons:city-worker" height="25" width="25"/>
        },
        {
            lable:'Notes',
            path:'/notes',
            
        },
    ],
    superadmin:[
        {
            lable:'Dashboard',
            path:'/dashboard',
            icon:<InlineIcon icon="mdi-light:view-dashboard" height="25" width="25"/>

        },
        {
            lable:'teachers',
            path:'/staffaccounts',
            icon:<InlineIcon icon="healthicons:city-worker" height="25" width="25"/>

        },
        {
            lable:'Students',
            path:'/studentsaccounts',
            icon: <InlineIcon icon="ph:student-light" height="25" width="25"/>
            
        },
        {
            lable:'Admins',
            path:'/adminaccounts',
            icon: <InlineIcon icon="material-symbols-light:admin-panel-settings-outline" height="25" width="25"/>

        },
        {
            lable:'Notes',
            path:'/notes',
            icon:<InlineIcon icon="solar:notes-minimalistic-line-duotone" height="25" width="25"/>

        },
    ],
}

export default NavLinks