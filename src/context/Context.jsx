import React, { createContext, useState} from 'react';

export const Context = createContext({});

export const Provider = (props) => {
    // HERE GOES CUSTOM LOGIC THAT WE NEED TO WRITE
    const initialCards = [
        {
            id: 1,
            title: `Маркетинг`,
            desc: `Студии на кои ќе научиш како да се справуваш со маркетинг предизвиците во дигиталниот свет и ќе ги стекнеш најбараните најбараните дигитални вештини во моментот.`,
            count: 6,
            imageUrl: `./img/marketing-card-logo.jpg`,
            linkUrl: '/lectures/marketing'
        },
        {
            id: 2,
            title: `Дизајн`,
            desc: `Студии на кои ќе научиш како да се справуваш со маркетинг предизвиците во дигиталниот свет и ќе ги стекнеш најбараните најбараните дигитални вештини во моментот.`,
            count: 7,
            imageUrl: `./img/design-card-logo.png`,
            linkUrl: `/lectures/design`
        },
        {
            id: 3,
            title: `Програмирање`,
            desc: `Студии на кои ќе научиш како да се справуваш со маркетинг предизвиците во дигиталниот свет и ќе ги стекнеш најбараните најбараните дигитални вештини во моментот.`,
            count: 8,
            imageUrl: `./img/programming-card-logo.jpg`,
            linkUrl: `/lectures/programming`
        },
        {
            id: 4,
            title: `UX/UI`,
            desc: `Студии на кои ќе научиш како да се справуваш со маркетинг предизвиците во дигиталниот свет и ќе ги стекнеш најбараните најбараните дигитални вештини во моментот.`,
            count: 3,
            imageUrl: `./img/ux-ui-card-logo.jpg`,
            linkUrl: `/lectures/uxui`
        },
        {
            id: 5,
            title: `Data Science`,
            desc: `Студии на кои ќе научиш како да се справуваш со маркетинг предизвиците во дигиталниот свет и ќе ги стекнеш најбараните најбараните дигитални вештини во моментот.`,
            count: 4,
            imageUrl: `./img/data-science-card-logo.jpg`,
            linkUrl: `/lectures/datascience`
        },
        {
            id: 6,
            title: `Бизнис`,
            desc: `Студии на кои ќе научиш како да се справуваш со маркетинг предизвиците во дигиталниот свет и ќе ги стекнеш најбараните најбараните дигитални вештини во моментот.`,
            count: 4,
            imageUrl: `./img/business-card-logo.jpg`,
            linkUrl: `/lectures/business`
        }

    ]
    const collections = [
        {
            id: `marketing`,
            title: `Курсеви по Маркетинг`,
            desc: `Студии на кои ќе научиш како да се справуваш со маркетинг предизвиците во дигиталниот свет и ќе ги стекнеш најбараните најбараните дигитални вештини во моментот.`, 
            lectures: [
                {
                    id: 1,
                    title: `Marketing Psychology: How To Become A Master Of Influence`,
                    desc: `If you’ve been desperately looking for world-class marketing strategies and techniques to increase your marketing influence, convert more visitors into leads, drive more sales, and ultimately grow your business, then enrolling and completing this program might be one of the best business decision you’ve ever made!`,
                    date: `June.01.2020`,
                    linkUrl: `https://www.udemy.com/course/marketing-psychology-how-to-become-a-master-of-influence/`
                },
                {
                    id: 2,
                    title: `Digital Marketing: The Ultimate Guide to Strategic Marketing`,
                    desc: `Join over 6200 marketers and excel as a Digital Marketing expert with 14 Courses in One. Our Digital Marketing material has been developed with the support of top professionals from The Oxford College of Marketing. All our speakers have at least 15 years experience in working and consulting for the top UK and US companies.`,
                    date: `March.23.2020`,
                    linkUrl: `https://www.udemy.com/course/digital-marketing-management/`,
                },
                {
                    id: 3,
                    title: `Social Media Marketing Agency : Digital Marketing + Business`,
                    desc: `
                    This course is a complete package for people who want to learn marketing and start to make money with it as a digital marketer, or in general people who want to make good money with specific instructions. Along the course we will learn both how you can do a successful marketing for different businesses and how you can build a successful social media marketing agency.`,
                    date: `May.15.2020`,
                    linkUrl: `https://www.udemy.com/course/social-media-marketing-agency-digital-business-facebook-ads-instagram/`,
                },
                {
                    id: 4,
                    title: `AWS Certified Solutions Architect - Associate 2020`,
                    desc: `This course is specifically designed for new aspirants who are planning to enter into the field of Cloud with the AWS associate-level certification course. This course starts from the absolute ground-up level and step by step we build our solid foundation in cloud computing and AWS to master various aspects related to Infrastructure, Storage, Security, Identity Management, and many more.`,
                    date: `July.16.2020`,
                    linkUrl: `https://www.udemy.com/course/aws-certified-solutions-architect-associate-2018/`,
                },
                {
                    id: 5,
                    title: `Marketing Psychology: How To Influence Customers To Buy Now`,
                    desc: `"If you are having a hard time selling your products online and are desperately looking for ways to sell more, become a more influential marketer and generate higher income, then this course will blow your mind! In this course, you will master 5 Kick-Ass Psychological Secrets used by extremely successful companies and filthy rich online entrepreneurs."`,
                    date: `August.03.2020`,
                    linkUrl: `https://www.udemy.com/course/marketing-psychology-for-digital-marketing-increase-your-influence/`,
                },
                {
                    id: 6,
                    title: `Digital Advertising & Marketing 101: Take The Complete Guide`,
                    desc: `Are you ready to learn about the world of Digital Marketing & Digital Advertising? Are you ready to learn about the hundreds of companies outside of Google and Facebook which control ads you see on your computer, phones, and tablets? Are you ready to understand the terms, pricing models, ad units, and everything else you need to succeed in the digital advertising space? Then you’re at the right place!`,
                    date: `June.05.2020`,
                    linkUrl: `https://www.udemy.com/course/digital-advertising-marketing-101/`,
                }
                
            ]
        },
        {
            id: `design`,
            title: ``,
            desc: ``,
            lectures: [
                {
                    id: 1,
                    title: `Ultimate Photoshop Training: From Beginner to Pro`,
                    desc: `This is the ultimate Photoshop training course that will take you from absolute beginner to proficient Photoshop user in no time at all .I'll be using the latest version of the program - Photoshop CC 2020, but all the content is explained for all users, no matter what version you have installed. Photoshop Elements is not compatible with this course.`,
                    date: `May,28,2020`,
                    linkUrl: `https://www.udemy.com/course/ultimate-photoshop-training-from-beginner-to-pro/`
                },
                {
                    id: 2,
                    title: `Illustrator CC 2020 MasterClass`,
                    desc: `Udemy’s best-selling Illustrator course – by one of the Top 10 Adobe Instructors in the world – teaches you to use this industry-leading vector graphic application as a creative professional. The whole course content, including examples, techniques, exercises and quizzes have been carefully selected and refined to offer the most efficient and enjoyable way to master Adobe Illustrator.`,
                    date: `June,23,2020`,
                    linkUrl: `https://www.udemy.com/course/illustrator-cc-masterclass/`
                },
                {
                    id: 3,
                    title: `The Ultimate Digital Painting Course - Beginner to Advanced`,
                    desc: `The Ultimate Digital Painting Course will show you how to create advanced art that will stand up as professional work. This course will enhance or give you skills in the world of Digital Painting - or your money back. The course is your track to obtaining digital drawing & painting skills like you always knew you should have! Whether for your own projects or to paint for clients.`,
                    date: `April,18,2020`,
                    linkUrl: `https://www.udemy.com/course/the-ultimate-digital-painting-course-beginner-to-advanced/`
                },
                {
                    id: 4,
                    title: `After Effects - Motion Graphics & Data Visualization`,
                    desc: `This course is for beginners. You don’t need any previous knowledge in VFX Compositing or any motion graphics experience. We’ll start with the super basics, taking simple icons breathing life into to them with After Effects. We’ll work through a real life projects, connecting Excel into After Effects to transform your boring spreadsheet data into approachable visual information. We’ll experiment with lighting & cameras. We’ll do some fun things with masking, looking at how important sound is in your presentation, all the way through to exporting for Youtube, Powerpoint and all sorts of social media including animated GIFS. `,
                    date: `July,11,2020`,
                    linkUrl: `https://www.udemy.com/course/animated-infographic-video-data-visualisation/`
                },
                {
                    id: 5,
                    title: `Design Thinking in 3 Steps`,
                    desc: `In this course, you’ll learn design thinking from the people who helped invent it. Designit is a global strategic design firm, and our designers help organizations across the globe learn and adopt a human-centered approach to innovation.`,
                    date: `May,29,2020`,
                    linkUrl: `https://www.udemy.com/course/designit-design-thinking/`
                },
                {
                    id: 6,
                    title: `Adobe Premiere Pro CC: Video Editing in Adobe Premiere Pro`,
                    desc: `This course comes after countless requests from my students who loved the way I teach, and how I explain things by going over intricate details so they can better grasp HOW and WHY things are done. I created this course for you to learn Video Editing and Premiere Pro CC from fundamentals to advanced techniques.   `,
                    date: `April,16,2020`,
                    linkUrl: `https://www.udemy.com/course/adobe-premiere-pro-cc-2017-video-editing/`
                },
                {
                    id: 7,
                    title: `Adobe InDesign CC - Essentials Training Course`,
                    desc: `Together we will work through real life projects starting with a simple company flyer, then a brochure & a company newsletter. We’ll make business cards & take control of a really long annual report. You'll learn essential typographic, color theory & graphic design principals.`,
                    date: `August,01,2020`,
                    linkUrl: `https://www.udemy.com/course/indesign-tutorial-basics-course/`
                },
            ]
        },
        {
            id: `programming`,
            title: `Курсеви по програмирање`,
            desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet laboriosam aperiam, ea ab unde inventore dolorum obcaecati veniam eum quo earum illo, corporis beatae sint officia iure assumenda id distinctio!`,
            lectures: [
                {
                    id: 1,
                    title: `Modern HTML & CSS From The Beginning (Including Sass)`,
                    desc: `This course is for both beginners and seasoned developers that want to learn how to build responsive websites and user interfaces with modern HTML5 and CSS3+ technologies like Flexbox and CSS Grid as well as the Sass pre-compiler. This course includes hours of both learning & studying sections along with real life projects. Stop having to rely on frameworks like Bootstrap for your user interface and learn how to create your own layouts and utility classes to build custom responsive websites and app UIs.`,
                    date: `July.23.2020`,
                    linkUrl: `https://www.udemy.com/course/modern-html-css-from-the-beginning/`
                },
                {
                    id: 2,
                    title: `The Complete JavaScript Course 2020: Build Real Projects!`,
                    desc: `This is a truly complete JavaScript course, that goes beyond what other JavaScript courses out there teach you. I will take you from a complete JavaScript beginner to an advanced developer. You will not just learn the JavaScript language itself, you will also learn how to program. How to solve problems. How to structure and organize code using common JavaScript patterns.`,
                    date: `June.09.2020`,
                    linkUrl: `https://www.udemy.com/course/the-complete-javascript-course/`
                },
                {
                    id: 3,
                    title: `Become a WordPress Developer: Unlocking Power With Code`,
                    desc: `Unlock the full power of WordPress and go beyond "just a blog platform" by learning how to code completely custom WordPress powered sites.`,
                    date: `July.28.2020`,
                    linkUrl: `https://www.udemy.com/course/become-a-wordpress-developer-php-javascript/`
                },
                {
                    id: 4,
                    title: `PHP for Beginners - Become a PHP Master - CMS Project`,
                    desc: `Are you new to PHP or need a refresher? Then this course will help you get all the fundamentals of Procedural PHP, Object Oriented PHP, MYSQLi and ending the course by building a CMS system similar to WordPress, Joomla or Drupal.`,
                    date: `July.13.2020`,
                    linkUrl: `https://www.udemy.com/course/php-for-complete-beginners-includes-msql-object-oriented/`
                },
                {
                    id: 5,
                    title: `Complete React Developer in 2020 (w/ Redux, Hooks, GraphQL)`,
                    desc: `Using the latest version of React, this course is focused on efficiency. Never spend time on confusing, out of date, incomplete tutorials anymore. Graduates of Andrei’s courses are now working at Google, Tesla, Amazon, Apple, IBM, JP Morgan, Facebook, + other top tech companies.`,
                    date: `June.23.2020`,
                    linkUrl: `https://www.udemy.com/course/complete-react-developer-zero-to-mastery/`
                },
                {
                    id: 6,
                    title: `Understanding TypeScript - 2020 Edition`,
                    desc: `Learn what TypeScript is, why it really is a powerful Addition to JavaScript, what its Features are and how to use it! And whilst doing so, also understand what you're actually doing in your Angular 2+ Code. This Course takes you from the very Basics and its most important Feature (Types!) to the Point where you're able to use TypeScript in any of your Projects. ReactJS Projects included!`,
                    date: `May.01.2020`,
                    linkUrl: `https://www.udemy.com/course/understanding-typescript/`
                },
                {
                    id: 7,
                    title: `Python and Django Full Stack Web Developer Bootcamp`,
                    desc: `We will teach you the latest technologies for building great web applications with Python 3 and Django! But we don't just teach that, we also teach the Front End technologies you need to know, including HTML, CSS, and Javascript. This course can be your one stop shop for everything you need! It will serve as a useful reference for many of your questions as you begin your journey in becoming a web developer!`,
                    date: `August.04.2020`,
                    linkUrl: `https://www.udemy.com/course/python-and-django-full-stack-web-developer-bootcamp/`
                },
                {
                    id: 8,
                    title: `The Complete Ruby on Rails Developer Course`,
                    desc: `Since its introduction, Ruby on Rails has rapidly become one of the most popular and powerful web application development tools for both startups and mature software companies. Some of the top sites in the world started with Ruby on Rails such as Basecamp, Twitter, Shopify, Github, LivingSocial, Groupon, Hulu, Airbnb, Yellow Pages and many more! Even after immense scaling, most of them continue to use Rails! Ruby on Rails developers routinely command the highest salaries in the tech industry!`,
                    date: `July.23.2020`,
                    linkUrl: `https://www.udemy.com/course/the-complete-ruby-on-rails-developer-course/`
                }, 
            ]
        },
        {
            id: `uxui`,
            title: `Курсеви по UX/UI`,
            desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet laboriosam aperiam, ea ab unde inventore dolorum obcaecati veniam eum quo earum illo, corporis beatae sint officia iure assumenda id distinctio!`,
            lectures: [
                {
                    id: 1,
                    title: `User Experience Design Essentials - Adobe XD UI UX Design`,
                    desc: `Hi there! My name is Dan & I’m an Adobe Certified Instructor. I’m here to help you learn Adobe XD efficiently and comprehensively. XD is a fantastic design tool used by industry professionals to product high quality & functional mockups. By the end of this course, you will be able to produce practical and effective User Experience (UX) and User Interface (UI) designs.`,
                    date: `June.09.2020`,
                    linkUrl: `https://www.udemy.com/course/ui-ux-web-design-using-adobe-xd/`
                },
                {
                    id: 2,
                    title: `The Complete App Design Course - UX, UI and Design Thinking`,
                    desc: `The App Design Course is great for people with absolutely no design experience or experienced designers who want to get up to speed quickly with mobile app design. We'll introduce you to the art of making beautiful apps. We'll explore key UI and UX concepts that are essential to building good looking and easy to use apps that are loved by users.`,
                    date: `June.23.2020`,
                    linkUrl: `https://www.udemy.com/course/the-complete-app-design-course-ux-and-ui-design/`
                },
                {
                    id: 3,
                    title: `Master Digital Product Design: UX Research & UI Design`,
                    desc: `Digital products are more abstract and complex than any product we've designed before. People are using their digital devices faster, with less conscious thought and more distracted than ever in history.`,
                    date: `July.14.2020`,
                    linkUrl: `https://www.udemy.com/course/master-digital-product-design-ux-research-ui-design/`
                }, 
            ]
        },
        {
            id: `datascience`,
            title: `Курсеви по Data Science`,
            desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet laboriosam aperiam, ea ab unde inventore dolorum obcaecati veniam eum quo earum illo, corporis beatae sint officia iure assumenda id distinctio!`,
            lectures: [
                {
                    id: 1,
                    title: `Machine Learning A-Z™: Hands-On Python & R In Data Science`,
                    desc: `Interested in the field of Machine Learning? Then this course is for you! This course has been designed by two professional Data Scientists so that we can share our knowledge and help you learn complex theory, algorithms, and coding libraries in a simple way.`,
                    date: `June.24.2020`,
                    linkUrl: `https://www.udemy.com/course/machinelearning/`
                },
                {
                    id: 2,
                    title: `Statistics for Data Science and Business Analysis`,
                    desc: `Is statistics a driving force in the industry you want to enter? Do you want to work as a Marketing Analyst, a Business Intelligence Analyst, a Data Analyst, or a Data Scientist? Well then, you’ve come to the right place!  `,
                    date: `July.25.2020`,
                    linkUrl: `https://www.udemy.com/course/statistics-for-data-science-and-business-analysis/`
                },
                {
                    id: 3,
                    title: `Deep Learning A-Z™: Hands-On Artificial Neural Networks`,
                    desc: `Artificial intelligence is growing exponentially. There is no doubt about that. Self-driving cars are clocking up millions of miles, IBM Watson is diagnosing patients better than armies of doctors and Google Deepmind's AlphaGo beat the World champion at Go - a game where intuition plays a key role.`,
                    date: `August.02.2020`,
                    linkUrl: `https://www.udemy.com/course/deeplearning/`
                },
                {
                    id: 4,
                    title: `Artificial Intelligence A-Z™: Learn How To Build An AI`,
                    desc: `Learn key AI concepts and intuition training to get you quickly up to speed with all things AI. Covering: How to start building AI with no previous coding experience using Python, How to merge AI with OpenAI Gym to learn as effectively as possible, How to optimize your AI to reach its maximum potential in the real world.`,
                    date: `July.18.2020`,
                    linkUrl: `https://www.udemy.com/course/artificial-intelligence-az/`
                },
            ]
        },
        {
            id: `business`,
            title: `Курсеви по Бизнис`,
            desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet laboriosam aperiam, ea ab unde inventore dolorum obcaecati veniam eum quo earum illo, corporis beatae sint officia iure assumenda id distinctio!`,
            lectures: [
                {
                    id: 1,
                    title: `The Complete Financial Analyst Course 2020`,
                    desc: `"If you’re trying to prepare for an eventual career in finance, but are still looking to round out your knowledge of the subject, The Complete Financial Analyst Course might be a perfect fit for you.", Business Insider. "A Financial Analyst Career is one of the top-paying entry-level jobs on the market.” `,
                    date: `May.29.2020`,
                    linkUrl: `https://www.udemy.com/course/the-complete-financial-analyst-course/`
                },
                {
                    id: 2,
                    title: `Microsoft Power BI - A Complete Introduction`,
                    desc: `You want to analyze data from single or multiple sources? You want to create your individual datasets based on these sources and transform your results into beautiful and easy-to-make visualizations? You also want to share your results with colleagues or collaborate on your projects? Finally, you want to be able to access your data from multiple devices?`,
                    date: `June.20.2020`,
                    linkUrl: `https://www.udemy.com/course/powerbi-complete-introduction/`
                },
                {
                    id: 3,
                    title: `Beginner to Pro in Excel: Financial Modeling and Valuation`,
                    desc: `Do you want to learn how to use Excel in a real working environment? Are you about to graduate from university and start looking for your first job? Are you a young professional looking to establish yourself in your new position? If you answered yes to any of these, then this is the right course for you!`,
                    date: `July.13.2020`,
                    linkUrl: `https://www.udemy.com/course/beginner-to-pro-in-excel-financial-modeling-and-valuation/`
                },
                {
                    id: 4,
                    title: `The Business Intelligence Analyst Course 2020`,
                    desc: `Hi! Welcome to The Business Intelligence Analyst Course, the only course you need to become a BI Analyst. We are proud to present you this one-of-a-kind opportunity. There are several online courses teaching some of the skills related to the BI Analyst profession. The truth of the matter is that none of them completely prepare you.`,
                    date: `April.29.2020`,
                    linkUrl: `https://www.udemy.com/course/the-business-intelligence-analyst-course-2018/`
                },
            ]
        }
    ];
    
    const [currentCollection, setCurrentCollection] = useState({});

    const createCollection = (linkUrl, isUrl = false) => {
        let newCollection = collections.find( collection => collection.id === (isUrl ? linkUrl.collectionId : linkUrl.split('/')[2]));
        setCurrentCollection(newCollection);
    }
    
    const CardsContext = {
        initialCards,
        collections,
        currentCollection, 
        setCurrentCollection,
        createCollection
    }
    return(
        <Context.Provider value={CardsContext}>
            {props.children}
        </Context.Provider>
    )
}

export const WebContextProvider = Provider;
export const CardsContext = Context;