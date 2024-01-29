import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import { FaHandHoldingMedical } from "react-icons/fa6";
import { FaMessage } from "react-icons/fa6";
import { SlSocialDropbox } from "react-icons/sl";
import { TbSettingsSearch } from "react-icons/tb";

export const Rdata = [
  {
    id: 1,
    head: <FaFileAlt />,
    title: "Inventory Management",
    description:
      "Complete real-time sales visibility across all of your sales channels & locations on a single platform.",
      Link : 'Learn More>' 
    },
    {
      id: 2,
      head: <FaMessage />,
      title: "Complaints Management",
      description:
        "Manage customer complaints and provide top-notch customer satisfaction, all in one place.",
        Link : 'Learn More>' 
      },
      {
        id: 3,
        head: <FaHandHoldingMedical />,
        title: "Accounting Management",
        description:
          "Manage expenses, supplier ledgers, customer ledgers, and the chart of accounts to digitize and automate the entire accounting process.",
          Link : 'Learn More>' 
        },
        {
          id: 4,
          head: <SlSocialDropbox />,
          title: "Order Management",
          description:
            "Order workflows, order status sync & return management for all your sales channels.",
            Link : 'Learn More>' 
          },
          {
            id: 5,
            head: <TbSettingsSearch />,
            title: "Analytics & Reporting",
            description:
              "Generate sales, inventory, fulfillment, and accounting reports to make informed business decisions.",
              Link : 'Learn More>' 
            },
            {
              id: 6,
              head: <FaShippingFast />,
              title: "Shipping Management",
              description:
                "Import, manage bulk ship orders and print shipping labels with a single click.",
                Link : 'Learn More>' 
              },
];
