import React from "react";
import { FC } from "react";
import logo from "../assets/image/logo.svg";
import styled from "styled-components";
import Instagram from "../assets/image/Instagram.svg"
import Facebook from "../assets/image/Facebook.svg"
import Twitter from "../assets/image/Twitter.svg"
import FontPoppins from "../assets/font/Poppins";


interface FooterProps {
  backgroundColor?: string;
  menu1?: string; 
  menu2?: string; 
  menu3?: string; 
  instagramPath?: string;
  facebookPath?: string;
  twitterPath?: string;
  aboutPath?: string;
  contactPath?:string;
  faqPath?:string;
  companyDescription?: string;
  questionText?: string;
  feedbackText?: string;
  copyrightText?: string;
}

interface FooterSectionProps {
  children: React.ReactNode;
  backgroundColor?: string;
}

const Section = styled.section`
  font-family: 'Poppins', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 6;
  padding-bottom: 6;
  flex-direction: column;

  @media (min-width: 640px) {
    padding-top: 30px;
    padding-bottom: 30px;
  }
`;

const Div1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  margin-bottom: 5px; //30px

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Div2 = styled.div`
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: 10px;
`;

const Div3 = styled.div`
display: flex;
flex: 1.5 1.5 0%;
width: 100%;
flex-direction: row;
justify-content: space-between;
flex-wrap: wrap;
margin-top: 0; //8px

@media (min-width: 768px) {
  .element {
    margin-top: 0;
  }
}
`;

const Div4 = styled.div`
display: flex;
flex-direction: column;
margin-top: 0;
margin-bottom: 4px;

@media (man-width: 150px) {
  .element {
    margin-top: 0;
    margin-bottom: 0;
  }
}
`;

const Div5 = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4px;
  margin-bottom: 4px;
  min-width: 150px;
`;

const DivOuter1 = styled.div`
  width: 100%;
  overflow: hidden;
`;

const DivOuter2 = styled.div<FooterSectionProps>`
  background-color: ${(props) => props.backgroundColor || "transparent"};
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  justify-content: center;
  align-items: center;
`;

const DivOuter3 = styled.div`
  width: 100%;
`;

const Logo = styled.img`
  width: 266px;
  height: 72.14px;
  object-fit: contain;
  margin-top: 26px; //6px
`;

const Social = styled.div`
  width: 202px;
  height: 46px;
  object-fit: contain;
  margin-top: 40px;
`;

const Img = styled.img`
margin-left:20px;
`

const P = styled.p`
font-weight: 400;
font-size: 16px;
color: #D1D5DB;
line-height: 30.8px;
margin-top: 8px;
max-width: 312px;
`;
const P1 = styled.p`
font-weight: 400;
font-size: 16px;
color: #D1D5DB;
line-height: 30.8px;
margin-top: 4px;
max-width: 312px;
`;

const P2 = styled.p`
  font-weight: 400;
  text-align: center;
  font-size: 20px;
  line-height: 27px;
  color: white;
`;

const H1 = styled.h1`
font-weight: 400;
font-size: 16px;
color: white;
line-height: 30.8px;
margin-top: 40px;
max-width: 312px;
`;

const H4 = styled.h4`
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  color: white;
`;

const Ul = styled.ul`
  margin-top: 48px;
  list-style-type: none;
`;

const UlKosong1 = styled.ul`
  list-style-type: none;
  margin-top: 40px;
`;
const UlKosong2 = styled.ul`
  list-style-type: none;
  margin-top: 2px; //20px
`;

const Li = styled.li`
margin-top: 10px;
font-weight: 400;
font-size: 17px;
line-height: 24px;
color: white;
&:hover {
  color: white; 
  cursor: pointer;
}
`;
const LastDiv = styled.div`
  width: 100%;
  align-items: center;
  flex-direction: column;
  padding-top: 1.5rem;
  border-top: 1px solid #ffffff;
`;

export const Footer: FC<FooterProps> = ({
  backgroundColor,
  menu1 = "About",
  menu2= "Contact",
  menu3= "FAQ",
  instagramPath = "/instagram",
  facebookPath = "/facebook",
  twitterPath = "/twitter/path",
  aboutPath = "/about",
  contactPath = "/contact",
  faqPath = "/faq",
  companyDescription = "Memudahkan Anda menuju perusahaan impian dengan menggunakan CV yang efektif dan efisien",
  questionText = "Question or feedback ?",
  feedbackText = "We'd love to hear from you",
  copyrightText = `Copyright © ${new Date().getFullYear()} CV Zaman Now`, 
}) => (
    <DivOuter1 data-testid="footer">
    <FontPoppins />
    <DivOuter2 backgroundColor={backgroundColor}>
      <DivOuter3>
        <Section>
          <Div1>
          <Div2>
              <Logo src={logo} />
              <P>
                {companyDescription}
              </P>
              <H1>
                {questionText}
              </H1>
              <P1>
                {feedbackText}
              </P1>
            </Div2>

            <Div3>
              <Div4>
                <H4>Company</H4>
                <Ul>
                  <Li>
                    <a href={aboutPath}>{menu1}</a>
                  </Li>
                  <Li>
                    <a href={contactPath}>{menu2}</a>
                  </Li>
                </Ul>
              </Div4>
              <Div4>
                <H4>Pusat Bantuan</H4>
                <Ul>
                  <Li>
                    <a href={faqPath}>{menu3}</a>
                  </Li>
                </Ul>
              </Div4>
              <Div5>
                <UlKosong1></UlKosong1>
                <UlKosong1></UlKosong1>
                <UlKosong1></UlKosong1>
                <UlKosong1></UlKosong1>
                <UlKosong2></UlKosong2>
                <Social>
                <a href={instagramPath}>
                   <Img src={Instagram} />
                </a>
                <a href={facebookPath}>
                   <Img src={Facebook} />
                </a>
                <a href={twitterPath}>
                    <Img src={Twitter} />
                </a>
                </Social>
              </Div5>
            </Div3>
          </Div1>

          <LastDiv>
          <P2>{copyrightText}</P2>
          </LastDiv>
        </Section>
      </DivOuter3>
    </DivOuter2>
  </DivOuter1>
);

export default FooterProps