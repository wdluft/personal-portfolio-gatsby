import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import blogImg from '../../images/become-by-doing 1.jpg'
import randomCommanderImg from '../../images/randomcommander 1.jpg'
import ManamakerImg from '../../images/manamaker 1.jpg'
import tomatoTimerImg from '../../images/tomato-timer 1.jpg'
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
                Manabase calculator for Magic the Gathering to help figure out
                how many basic lands of each type to add to a deck. Built with
                React.
              </p>
              <a
                href="https://manamaker.site"
                target="_blank"
                rel="noopener noreferrer"
              >
                ManaMaker.site
              </a>
              <a
                href="https://github.com/wdluft/manamaker-version-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
            <img src={ManamakerImg} alt="ManaMaker" />
          </TabPannelWrapper>
        </TabPanel>
        <TabPanel>
          <TabPannelWrapper>
            <div className="tabPannel__project-info">
              <h3>Tomato Timer</h3>
              <p>
                Pomodoro timer to set times to focus and take breaks while
                working. Built with React.
              </p>
              <a
                href="https://mystifying-heisenberg-8bc659.netlify.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mystifying-heisenberg-8bc659.netlify.com/
              </a>
              <a
                href="https://github.com/wdluft/tomato-timer"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
            <img src={tomatoTimerImg} alt="Tomato Timer" />
          </TabPannelWrapper>
        </TabPanel>
        <TabPanel>
          <TabPannelWrapper>
            <div className="tabPannel__project-info">
              <h3>Random Commander</h3>
              <p>
                App to get a random legengary creature card from Magic the
                Gathering to build a commander deck around. Built with vanilla
                JavaScript, using the Scryfall API.
              </p>
              <a
                href="https://randomcommander.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                RandomCommander.com
              </a>
              <a
                href="https://github.com/wdluft/randomcommander"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
            <img src={randomCommanderImg} alt="Random Commander" />
          </TabPannelWrapper>
        </TabPanel>
        <TabPanel>
          <TabPannelWrapper>
            <div className="tabPannel__project-info">
              <h3>Become by Doing Blog</h3>
              <p>Personal blog built using Gatsby and React.</p>
              <a
                href="https://becomebydoing.me"
                target="_blank"
                rel="noopener noreferrer"
              >
                BecomebyDoing.me
              </a>
              <a
                href="https://github.com/wdluft/become-by-doing-blog"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
            <img src={blogImg} alt="Become by Doing blog" />
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
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    text-align: center;

    /* small/mobile */
    @media (max-width: 640px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    /* medium/tablet */
    @media (max-width: 768px) {
    }
    @media (max-width: 1024px) {
      margin: 0 1rem;
    }
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
    width: 90%;
    border-radius: 5px;
    margin: auto;
  }

  .tabPannel__project-info {
    display: flex;
    flex-direction: column;
    padding-left: 1rem;

    h3 {
      color: var(--tertiary-3);
    }

    p {
      line-height: 1.75rem;
    }
  }

  /* small/mobile */
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    text-align: center;
    padding-bottom: 1rem;

    img {
      margin-top: 1rem;
      max-width: 300px;
      max-height: 300px;
    }
  }
  /* medium/tablet */
  @media (max-width: 768px) {
    /* nothing right now */
  }
  /* large/tablet */
  @media (max-width: 1024px) {
    margin: 0 1rem 2rem;
  }
`
