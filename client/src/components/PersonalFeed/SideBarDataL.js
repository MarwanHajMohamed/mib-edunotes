import React from "react";

import * as RiIcons from "react-icons/ri";

export const SideBarDataL = [
  {
    title: "Sort By Date",
    // path: '/overview',
    // icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Ascending",
        path: "sortbydate/ascending",
        // icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Decending",
        path: "sortbydate/decending",
        // icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Sort By Topic",
    // path: '/reports',
    // icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Computing",
        path: "sortbytopic/computerscience",
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: "Maths",
        path: "sortbytopic/maths",
        // icon: <IoIcons.IoIosPaper />
      },
      /*  {
                title: 'Science',
                path: 'sortbusubject/science',
                // icon: <IoIcons.IoIosPaper />,
            } */
    ],
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
    title: "Sort By User",
    // path: '/messages',
    // icon: <FaIcons.FaEnvelopeOpenText />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "NoteKing",
        path: "sortbyuser/noteking",
        // icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Royal Notes",
        path: "sortbyuser/royalnotes",
        // icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  /* {
        title: 'Support',
        path: '/support',
        icon: <IoIcons.IoMdHelpCircle />
    } */
];
