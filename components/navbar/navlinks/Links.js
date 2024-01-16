import { FaChalkboardUser, FaGauge, FaNoteSticky, FaNotesMedical, FaSchool, FaUser, FaUserTie, FaVideo } from 'react-icons/fa6'
const NavLinks = {
    student:[
        {
            lable:'Dashboard',
            path:'/dashboard',
            icon: <FaGauge/>

        },
        {
            lable:'Account',
            path:'/account',
            icon:<FaUser/>

        },
        {
            lable:'Video Tutorial',
            path:'/tutstream',
            icon:<FaVideo/>

        },
        {
            lable:'PDF Notes',
            path:'/notes',
            icon:<FaNoteSticky/>

        },
    ],
    staff:[
        {
            lable:'Dashboard',
            path:'/dashboard',
            icon:<FaGauge/>

        },
        {
            lable:'Account',
            path:'/account',
            icon:<FaUser/>

        },
        {
            lable:'Video Tutorial',
            path:'/tutstream',
            icon:<FaVideo/>

        },
        {
            lable:'PDF Notes',
            path:'/notes',
            icon:<FaNoteSticky/>

        },
    ],
    admin:[
        {
            lable:'Dashboard',
            path:'/dashboard',
            icon:<FaGauge/>

        },
        {
            lable:'Students',
            path:'/studentsaccounts',
            icon:<FaSchool/>

        },
        {
            lable:'Staff',
            path:'/staffaccounts',
            icon:  <FaChalkboardUser/>

        },
        {
            lable:'Notes',
            path:'/notes',
            icon:<FaNotesMedical/>

        },
    ],
    superadmin:[
        {
            lable:'Dashboard',
            path:'/dashboard',
            icon:<FaGauge/>

        },
        {
            lable:'teachers',
            path:'/staffaccounts',
            icon:<FaChalkboardUser/>

        },
        {
            lable:'Students',
            path:'/studentsaccounts',
            icon: <FaSchool/>

        },
        {
            lable:'Admins',
            path:'/adminaccounts',
            icon:<FaUserTie/>

        },
        {
            lable:'Notes',
            path:'/notes',
            icon:<FaNotesMedical/>

        },
    ],
}

export default NavLinks