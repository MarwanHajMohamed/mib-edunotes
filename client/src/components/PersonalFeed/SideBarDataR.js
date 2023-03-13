import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

export const SideBarData = [
    {
        title: 'Recent Notes',
        // path: '/overview',
        // icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Note 1',
                path: 'recentnotes/recentnote1',
                // icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Note 2',
                path: 'recentnotes/recentnote2',
                // icon: <IoIcons.IoIosPaper />,
            },
        ]
    },
    {
        title: 'Recent Topic',
        // path: '/reports',
        // icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Topic 1',
                path: 'recenttopics/recenttopic1',
                // icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Topic 2',
                path: 'recenttopics/recenttopic2',
                // icon: <IoIcons.IoIosPaper />
            },
           /*  {
                title: 'Science',
                path: 'sortbusubject/science',
                // icon: <IoIcons.IoIosPaper />,
            } */
        ]
    },
    /* {
        title: 'Products',
        path: '/products',
        icon: <FaIcons.FaCartPlus />
    },
    {
        title: 'Team',
        path: '/team',
        icon: <IoIcons.IoMdPeople />
    }, */
    {
        title: 'Recent Users',
        // path: '/messages',
        // icon: <FaIcons.FaEnvelopeOpenText />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'User 1',
                path: 'recentusers/recentuser1',
                // icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'User 2',
                path: 'recentusers/recentuser2',
                // icon: <IoIcons.IoIosPaper />,
            }
        ]
            
    },
    /* {
        title: 'Support',
        path: '/support',
        icon: <IoIcons.IoMdHelpCircle />
    } */

];
