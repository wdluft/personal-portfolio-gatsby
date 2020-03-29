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
          <Tab>ManaMaker</Tab>
          <Tab>Tomato Timer</Tab>
          <Tab>Random Commander</Tab>
          <Tab>Become by Doing Blog</Tab>
        </TabList>

        <TabPanel>
          <TabPannelWrapper>
            <div className="tabPannel__project-info">
              <h3>ManaMaker</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Obcaecati nulla esse suscipit, at maxime quaerat sint
                dignissimos aspernatur error iste?
              </p>
              <a href="https://manamaker.site">Website</a>
              <a href="https://github.com/wdluft/manamaker-version-2">
                Github Repo
              </a>
            </div>
            <img src={headshot} alt="Project" />
          </TabPannelWrapper>
        </TabPanel>
        <TabPanel>
          <TabPannelWrapper>
            <div className="tabPannel__project-info">
              <h3>Tomato Timer</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Obcaecati nulla esse suscipit, at maxime quaerat sint
                dignissimos aspernatur error iste?
              </p>
              <a href="https://mystifying-heisenberg-8bc659.netlify.com/">
                Website
              </a>
              <a href="https://github.com/wdluft/tomato-timer">Github Repo</a>
            </div>
            <img src={headshot} alt="Project" />
          </TabPannelWrapper>
        </TabPanel>
        <TabPanel>
          <TabPannelWrapper>
            <div className="tabPannel__project-info">
              <h3>Random Commander</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Obcaecati nulla esse suscipit, at maxime quaerat sint
                dignissimos aspernatur error iste?
              </p>
              <a href="https://randomcommander.com/">Website</a>
              <a href="https://github.com/wdluft/randomcommander">
                Github Repo
              </a>
            </div>
            <img src={headshot} alt="Project" />
          </TabPannelWrapper>
        </TabPanel>
        <TabPanel>
          <TabPannelWrapper>
            <div className="tabPannel__project-info">
              <h3>Become by Doing Blog</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Obcaecati nulla esse suscipit, at maxime quaerat sint
                dignissimos aspernatur error iste?
              </p>
              <a href="https://becomebydoing.me">Website</a>
              <a href="https://github.com/wdluft/become-by-doing-blog">
                Github Repo
              </a>
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
    border: 1px solid transparent;
    border-radius: 5px 5px 0 0;
    margin-right: 3px;
    bottom: 0;

    &:focus {
      outline: blue;
      box-shadow: none;
    }
  }

  .react-tabs__tab--selected {
    border: 1px solid var(--tertiary-3);
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

  .tabPannel__project-info {
    display: flex;
    flex-direction: column;
    padding-left: 1rem;
    font-size: var(--mediumFontSize);

    h3 {
      color: var(--tertiary-3);
    }

    p {
      line-height: 1.75rem;
    }
  }
`
