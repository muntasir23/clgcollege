import React from 'react'
import { FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from 'react-share'

export default function SingleNotice() {

  const shareUrl = "https://darsforyouth.org/"

  return (
    <div className="single-blog-share">
    <FacebookShareButton url={shareUrl} >
      <FacebookIcon size={30} round={true} />
    </FacebookShareButton>
    <WhatsappShareButton url={shareUrl} >
      <WhatsappIcon size={30} round={true} />
    </WhatsappShareButton>
    <LinkedinShareButton url={shareUrl}>
      <LinkedinIcon size={30} round={true} />
    </LinkedinShareButton>
    <TwitterShareButton url={shareUrl}>
      <TwitterIcon size={30} round={true} />
    </TwitterShareButton>
  </div>
  )
}
