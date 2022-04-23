import React from 'react';
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import AnswersTab from '../TabsContent/AnswersTab/AnswersTab.component';
import ExpertiseTab from '../TabsContent/ExpertiseTab/ExpertiseTab.component';
import ProfileTab from '../TabsContent/ProfileTab/ProfileTab.component';
import ReviewsTab from '../TabsContent/ReviewsTab/ReviewsTab.component';
import ToolsTap from '../TabsContent/ToolsTab/ToolsTab.component';

const TabsBasr = () => {
  return (
    <>
      <Tabs id="controlled-tab-example" className="mb-3"
      >
        <Tab eventKey="Profile" title="Profile">
            <ProfileTab />
        </Tab>
        <Tab eventKey="Expertise" title="Expertise">
            <ExpertiseTab />
        </Tab>
        <Tab eventKey="Tools" title="Tools">
              <ToolsTap />
        </Tab>
        <Tab eventKey="Reviews(14)" title="Reviews(14)">
            <ReviewsTab />
        </Tab>
        <Tab eventKey="Answers(10)" title="Answers(10)" >
            <AnswersTab />
        </Tab>
      </Tabs>



    </>
  );
};

export default TabsBasr;
