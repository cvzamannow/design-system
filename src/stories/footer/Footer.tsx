import React from "react";
import { FC } from "react";
import logo from "../assets/logo.svg";
import styled from "styled-components";
import Instagram from "../assets/Instagram.svg"
import Facebook from "../assets/Facebook.svg"
import Twitter from "../assets/Twitter.svg"

interface FooterProps {
  backgroundColor?: string;
}

interface FooterSectionProps {
  children: React.ReactNode;
  backgroundColor?: string;
}

const Section = styled.section`
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
`;

const Div4 = styled.div`
diplay: flex;
flex-direction: column;
margin-top: 0;
margin-bottom: 4px;

@media (man-width: 150px) {
  .element {
    margin-top: 0;
    margin-bottom: 0;
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
font-size; 16px;
color: #D1D5DB;
line-height: 30.8px;
margin-top: 8px;
max-width: 312px;
`;
const P1 = styled.p`
font-weight: 400;
font-size; 16px;
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
font-size; 16px;
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
`;
const LastDiv = styled.div`
  width: 100%;
  align-items: center;
  flex-direction: column;
  padding-top: 1.5rem;
  border-top: 1px solid #ffffff;
`;

export const Footer: FC<FooterProps> = ({ backgroundColor }) => (
  <DivOuter1 data-testid="footer">
    <DivOuter2 backgroundColor={backgroundColor}>
      <DivOuter3>
        <Section>
          <Div1>
            <Div2>
              <Logo src={logo} />
              <P>
                Memudahkan Anda menuju perusahaan impian dengan menggunakan CV
                yang efektif dan efisien
              </P>
              <H1>Question or feedback ?</H1>
              <P1>we'd love to hear from you</P1>
            </Div2>

            <Div3>
              <Div4>
                <H4>Company</H4>
                <Ul>
                  <Li>
                    <a href="/about">About</a>
                  </Li>
                  <Li>
                    <a href="/contact">Contact</a>
                  </Li>
                </Ul>
              </Div4>
              <Div4>
                <H4>Pusat bantuan</H4>
                <Ul>
                  <Li>
                    <a href="/faq">FAQ</a>
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
                  <a href="https://www.instagram.com/">
                    <Img src={Instagram} />
                  </a>
                  <a href="https://www.facebook.com/">
                    <Img src={Facebook} />
                  </a>
                  <a href="https://www.twitter.com/">
                    <Img src={Twitter} />
                  </a>
                </Social>
              </Div5>
            </Div3>
          </Div1>

          <LastDiv>
            <P2>Copyright &copy; 2022 CV Zaman Now</P2>
          </LastDiv>
        </Section>
      </DivOuter3>
    </DivOuter2>
  </DivOuter1>
);

export default FooterProps