import React from "react";
// import { FaInstagram } from "react-icons/fa";

const shareText = "¡Convertite en Padrino y ayudanos a cambiar una vida!";
const buttonStyle =
  "duration-200 ease inline-flex items-center mb-1 mr-1 transition p-1 sm:p-3 rounded-lg text-white border-purple-600 bg-purple-600 hover:bg-purple-700 hover:border-purple-700";

const FacebookButton = () => {
	return (
		<a className={buttonStyle} target="_blank" rel="noopener" href={`https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Ftzedaka-neon.vercel.app%2F&quote=${encodeURIComponent(shareText)}`} aria-label="Share on Facebook" draggable="false">
			<svg aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6">
				<title>Facebook</title>
				<path d="M379 22v75h-44c-36 0-42 17-42 41v54h84l-12 85h-72v217h-88V277h-72v-85h72v-62c0-72 45-112 109-112 31 0 58 3 65 4z"></path>
			</svg>
		</a>
	);
};

// Removed by Tzedaká request - Uncomment if required
// const TwitterButton = () => {
// 	return (
// 		<a className={buttonStyle} target="_blank" rel="noopener" href={`https://twitter.com/intent/tweet?url=https%3A%2F%2Ftzedaka-neon.vercel.app%2F&text=${encodeURIComponent(shareText)}`} aria-label="Share on Twitter" draggable="false">
// 			<svg aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6">
// 				<title>Twitter</title>
// 				<path d="m459 152 1 13c0 139-106 299-299 299-59 0-115-17-161-47a217 217 0 0 0 156-44c-47-1-85-31-98-72l19 1c10 0 19-1 28-3-48-10-84-52-84-103v-2c14 8 30 13 47 14A105 105 0 0 1 36 67c51 64 129 106 216 110-2-8-2-16-2-24a105 105 0 0 1 181-72c24-4 47-13 67-25-8 24-25 45-46 58 21-3 41-8 60-17-14 21-32 40-53 55z">
// 				</path>
// 			</svg>
// 		</a>
// 	);
// };

const LinkedinButton = () => {
  return (
    <a
      className={buttonStyle}
      target="_blank"
      rel="noopener"
      href={`https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Ftzedaka-neon.vercel.app%2F&title=test&summary=test&source=https%3A%2F%2Ftzedaka-neon.vercel.app%2F`}
      aria-label="Share on Linkedin"
      draggable="false"
    >
      <svg
        aria-hidden="true"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="w-6 h-6"
      >
        <title>Linkedin</title>
        <path d="M136 183v283H42V183h94zm6-88c1 27-20 49-53 49-32 0-52-22-52-49 0-28 21-49 53-49s52 21 52 49zm333 208v163h-94V314c0-38-13-64-47-64-26 0-42 18-49 35-2 6-3 14-3 23v158h-94V183h94v41c12-20 34-48 85-48 62 0 108 41 108 127z"></path>
      </svg>
    </a>
  );
};

const WhatsappButton = () => {
  return (
    <a
      className={buttonStyle}
      target="_blank"
      rel="noopener"
      href={`https://wa.me/?text=${encodeURIComponent(
        `${shareText} https://tzedaka-neon.vercel.app/`
      )}`}
      aria-label="Share on Whatsapp"
      draggable="false"
    >
      <svg
        aria-hidden="true"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="w-6 h-6"
      >
        <title>Whatsapp</title>
        <path d="M413 97A222 222 0 0 0 64 365L31 480l118-31a224 224 0 0 0 330-195c0-59-25-115-67-157zM256 439c-33 0-66-9-94-26l-7-4-70 18 19-68-4-7a185 185 0 0 1 287-229c34 36 56 82 55 131 1 102-84 185-186 185zm101-138c-5-3-33-17-38-18-5-2-9-3-12 2l-18 22c-3 4-6 4-12 2-32-17-54-30-75-66-6-10 5-10 16-31 2-4 1-7-1-10l-17-41c-4-10-9-9-12-9h-11c-4 0-9 1-15 7-5 5-19 19-19 46s20 54 23 57c2 4 39 60 94 84 36 15 49 17 67 14 11-2 33-14 37-27s5-24 4-26c-2-2-5-4-11-6z"></path>
      </svg>
    </a>
  );
};

const EmailButton = () => {
  return (
    <a
      className={buttonStyle}
      target="_blank"
      rel="noopener"
      href={`mailto:?subject=test&body=${encodeURIComponent(
        `${shareText} https://tzedaka-neon.vercel.app/`
      )}`}
      aria-label="Share by Email"
      draggable="false"
    >
      <svg
        aria-hidden="true"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="w-6 h-6"
      >
        <title>Email</title>
        <path d="M464 64a48 48 0 0 1 29 86L275 314c-11 8-27 8-38 0L19 150a48 48 0 0 1 29-86h416zM218 339c22 17 54 17 76 0l218-163v208c0 35-29 64-64 64H64c-35 0-64-29-64-64V176l218 163z"></path>
      </svg>
    </a>
  );
};

// const InstagramButton = () => {
//   const instagramProfileUrl = "https://www.instagram.com/fundaciontzedaka/";
//   return (
//     <a
//       className={buttonStyle}
//       target="_blank"
//       rel="noopener"
//       href={instagramProfileUrl}
//       aria-label="Visit on Instagram"
//       draggable="false"
//     >
//       <FaInstagram className="w-6 h-6" />
//     </a>
//   );
// };

const ShareButtons = () => {
  return (
    <div className="sharing-buttons flex items-center justify-center flex-wrap">
      <WhatsappButton />
      <FacebookButton />
      <LinkedinButton />
      <EmailButton />
    </div>
  );
};

export default ShareButtons;
