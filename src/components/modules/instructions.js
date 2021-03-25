import React, { Fragment } from 'react'; // eslint-disable-line
import * as LINKS          from '../../data/links';

const Instructions = (props) => {
    return (
        <Fragment>
            <div className="usa-alert usa-alert--warning usa-alert--slim" >
              <div className="usa-alert__body">
                <p className="usa-alert__text">
                    <strong>This site is in Alpha</strong>. Help us improve it by emailing site-scanning@gsa.gov with feedback.
                </p>
              </div>
            </div>
            <h1>Site Scanning Query Builder</h1>
            The Site Scanning program automates a wide range of scans of public federal websites and generates data about website health and best practices. Learn more at the <a href="https://digital.gov/site-scanning/">program website</a> and the <a href="https://open.gsa.gov/api/site-scanning-api/">Site Scanning API documentation</a>.  
            <h2>How This Page Works</h2>
            <ol >
                <li>
                    Set the filters you want
                </li>
                <li>
                    Copy the generated URL
                </li>
                <li>
                    Use this URL in our <a href={LINKS.GOOGLE_SHEETS_LINK} target='_blank' className='usa-link'>Google Sheets</a> template to pull the data into a spreadsheet!
                </li>
                <li>
                    Note: You'll want to <a href="https://open.gsa.gov/api/site-scanning-api/#getting-started">get your own API key</a> and replace `DEMO_KEY` with your key string.
                </li>
            </ol>
        </Fragment>
    );
};

Instructions.propTypes = {};

export default Instructions;
