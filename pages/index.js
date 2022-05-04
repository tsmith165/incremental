import Image from 'next/image';
import { useState, useRef, useEffect, useCallback } from "react";
import { Tooltip } from 'react-tippy'

import styles from '../styles/pages/Home.module.scss';

import PageLayout from '../src/components/layout/PageLayout';

import SchoolIcon from '@material-ui/icons/School';
import MoodIcon from '@material-ui/icons/Mood';
import GroupIcon from '@material-ui/icons/Group';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ReceiptIcon from '@material-ui/icons/Receipt';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';

const Home = ({ }) => {
  const [state, set_state] = useState(
    {
      cash: 50000,
      employees: [
        {
          role: "owner",
          salary: 10000,
          skill: 90,
          productivity: 50,
          morale: 100,
          boosts: [
            ["team_productivity", 1.5],
            ["team_morale", 1.5]
          ]
        }
      ],
      team_skill: 90,
      team_morale: 100,
      team_overhead: 30,
      products: [
        {
          name: "Start Button Customizer",
          price: 5,
          sale_rate: 100 // per day
        }
      ]
    }
  );

  console.log("Loading State...")
  console.log(state)
  console.log(`Current Cash: ${state.cash}`)

  return (
    <PageLayout page_title={"Incremental Game"}>
      <div className={styles.home_container}>
        <div className={styles.home_body}>
          <div className={styles.game_container}>
            {/* Column 1 */}
            <div className={styles.column}>
              <div className={`${styles.column_container}`}>

                {/* Team Status Bars */}
                <div className={`${styles.row_card} ${styles.row_1_card} ${styles.team_status}`}>
                  <div className={`${styles.team_status_container}`}>

                    {/* Skill Status Row */}
                    <div className={`${styles.status_row}`}>
                      <div className={`${styles.status_icon_container}`}>
                        <Tooltip title="Skill Status" position="top">
                          <SchoolIcon className={styles.status_icon}/>
                        </Tooltip>
                      </div>
                      <div className={`${styles.status_bar_container}`}>
                        <div className={`${styles.status_bar}`} style={{width: state.team_skill + '%'}}>

                        </div>
                      </div>
                    </div>
                    {/* Morale Status Row */}
                    <div className={`${styles.status_row}`}>
                      <div className={`${styles.status_icon_container}`}>
                        <Tooltip title="Morale Status" position="top">
                          <MoodIcon className={styles.status_icon}/>
                        </Tooltip>
                      </div>
                      <div className={`${styles.status_bar_container}`}>
                        <div className={`${styles.status_bar}`} style={{width: state.team_morale + '%'}}>
                          
                        </div>
                      </div>
                    </div>
                    {/* Overhead Status Row */}
                    <div className={`${styles.status_row}`}>
                      <div className={`${styles.status_icon_container}`}>
                        <Tooltip title="Overhead Status" position="top">
                          <GroupIcon className={styles.status_icon}/>
                        </Tooltip>
                      </div>
                      <div className={`${styles.status_bar_container}`}>
                        <div className={`${styles.status_bar}`} style={{width: state.team_overhead + '%'}}>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Employee Tree */}
                <div className={`${styles.row_card} ${styles.row_2_card} ${styles.employee_tree}`}>

                </div>
              </div>
            </div>
            {/* Column 2 */}
            <div className={styles.column}>
              <div className={`${styles.column_container}`}>

                {/* Income Status Figures */}
                <div className={`${styles.row_card} ${styles.row_1_card} ${styles.income_status}`}>
                  <div className={`${styles.income_status_container}`}>

                      {/* Cash On Hand Status Row */}
                      <div className={`${styles.status_row}`}>
                        <div className={`${styles.status_icon_container}`}>
                          <Tooltip title="Cash On Hand  Status" position="top">
                            <AttachMoneyIcon className={styles.status_icon}/>
                          </Tooltip>
                        </div>
                        <div className={`${styles.status_text_container}`}>
                          <div className={`${styles.status_text}`}>
                            {state.cash}
                          </div>
                        </div>
                      </div>
                      {/* Sales / Day Status Row */}
                      <div className={`${styles.status_row}`}>
                        <div className={`${styles.status_icon_container}`}>
                          <Tooltip title="Sales Per Day Status" position="top">
                            <ReceiptIcon className={styles.status_icon}/>
                          </Tooltip>
                        </div>
                        <div className={`${styles.status_text_container}`}>
                          <div className={`${styles.status_text}`}>
                            {0}
                          </div>
                        </div>
                      </div>
                      {/* Profit Margin Status Row */}
                      <div className={`${styles.status_row}`}>
                        <div className={`${styles.status_icon_container}`}>
                          <Tooltip title="Profit Margin Status" position="top">
                            <LocalAtmIcon className={styles.status_icon}/>
                          </Tooltip>
                        </div>
                        <div className={`${styles.status_text_container}`}>
                          <div className={`${styles.status_text}`}>
                            {0}
                          </div>
                        </div>
                      </div>
                  </div>
                </div>

                {/* Product Tree */}
                <div className={`${styles.row_card} ${styles.row_2_card} ${styles.product_tree}`}>

                </div>
              </div>
            </div>
            {/* Column 3 */}
            <div className={styles.column}>
              <div className={`${styles.column_container}`}>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default Home;
