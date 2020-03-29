import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import headshot from '../../images/headshot.jpg'
import styled from 'styled-components'

const ProjectsTab = () => {
  return (
    <ProjectsTabWrapper>
      <Tabs>
        <TabList>
          <Tab>Project 1</Tab>
          <Tab>Project 2</Tab>
          <Tab>Project 3</Tab>
        </TabList>

        <TabPanel>
          <TabPannelWrapper>
            <div>
              <h3>Any content 1</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Obcaecati nulla esse suscipit, at maxime quaerat sint
                dignissimos aspernatur error iste?
              </p>
              <a href="#">Link to Website</a>
              <a href="#">Link to Github Repo</a>
            </div>
            <img src={headshot} alt="Project" />
          </TabPannelWrapper>
        </TabPanel>
        <TabPanel>
          <TabPannelWrapper>
            <div>
              <h3>Any content 2</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Obcaecati nulla esse suscipit, at maxime quaerat sint
                dignissimos aspernatur error iste?
              </p>
              <a href="#">Link to Website</a>
              <a href="#">Link to Github Repo</a>
            </div>
            <img src={headshot} alt="Project" />
          </TabPannelWrapper>
        </TabPanel>
        <TabPanel>
          <TabPannelWrapper>
            <div>
              <h3>Any content 3</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Obcaecati nulla esse suscipit, at maxime quaerat sint
                dignissimos aspernatur error iste?
              </p>
              <a href="#">Link to Website</a>
              <a href="#">Link to Github Repo</a>
            </div>
            <img src={headshot} alt="Project" />
          </TabPannelWrapper>
        </TabPanel>
      </Tabs>
    </ProjectsTabWrapper>
  )
}

export default ProjectsTab

const ProjectsTabWrapper = styled.section`
  .react-tabs__tab-list {
    border: none;
    margin: 0 0 0 0;
    box-sizing: border-box;
  }

  .react-tabs__tab {
    background: var(--gray-7);
    color: var(--gray-1);
    border: 3px solid transparent;
    border-radius: 5px 5px 0 0;
    margin-right: 3px;
    bottom: 0;

    &:focus {
      outline: blue;
      box-shadow: none;
    }
  }

  .react-tabs__tab--selected {
    border-left: 3px solid var(--tertiary-3);
    border-top: 3px solid var(--tertiary-3);
    border-right: 3px solid var(--tertiary-3);
    border-bottom: 3px solid var(--tertiary-3);
  }
`

const TabPannelWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  padding-top: 15px;
  border-radius: 0 5px 5px 5px;
  background: var(--gray-7);
  box-shadow: inset 0 2px 2px rgba(0, 0, 0, 0.25), var(--elevation-3);
  border-top: var(--tertiary-3) solid 10px;
  padding-bottom: 1.5rem;
  margin-bottom: 3rem;

  img {
    width: 300px;
    height: 300px;
  }
`
