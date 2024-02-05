import React from 'react'

const Partner = () => {
  return (
    <>
      <div className="partner-area py-20">
        <div className="mx-5 sm:mx-10 grid grid-cols-12 lg:grid-cols-5">
            <div className="col-span-6 sm:col-span-4 lg:col-span-1 mx-auto mb-10">
                <img src='google.png' alt="google" />
            </div>
            <div className="col-span-6 sm:col-span-4 lg:col-span-1 mx-auto">
                <img src='Trello.png' alt="trello" />
            </div>
            <div className="col-span-6 sm:col-span-4 lg:col-span-1 mx-auto mb-10">
                <img src='monday.png' alt="monday" />
            </div>
            <div className="col-span-6 lg:col-span-1 mx-auto">
                <img src='Notion.png' alt="notion" />
            </div>
            <div className="col-span-12 sm:col-span-6 lg:col-span-1 mx-auto">
                <img src='Slack.png' alt="slack" />
            </div>
        </div>
      </div>
    </>
  )
}

export default Partner
