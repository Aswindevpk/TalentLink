import { IoInfinite, IoOptionsOutline } from "react-icons/io5";
import styled from "styled-components";
import Button from "../ui/Button";
import AboutCard from "../ui/AboutCard";
import { TbSettings2 } from "react-icons/tb";
import { PiRocketLight } from "react-icons/pi";


const StyledAboutSection = styled.div`
  background: linear-gradient(to top, var(--color-grey-light) 0%, #ffffff 100%);
  padding: 8rem 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  border-top:1px solid var(--color-grey-light);
`;

const StyledTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 670px;
  gap: 3rem;
  padding: 0rem 2rem;

  h1{
    text-align: center;
    font-size: clamp(3rem, 3vw, 4rem);
  }

  p{
    text-align: center;
    font-size: 14px;
  }
`;

const StyledLogoBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    border-radius:1.6rem;
    padding: 1.2rem;
    background-color:var(--color-white);
    box-shadow:var(--shadow-md);
    border: 1px solid var(--color-grey-light);

    .brand-icon{
        color: var(--color-brand);
    }
`;

const StyledCardWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4rem;
    padding: 2rem;
    justify-content: space-around;
`;



const CardData = [
    {
        icon: TbSettings2,
        heading: "Tailored Solutions",
        content: "Custom recruitment strategies designed for your unique business needs."
    },
    {
        icon: PiRocketLight,
        heading: "Faster Hiring",
        content: "Streamlined processes that cut hiring time by 30%."
    },
    {
        icon: IoOptionsOutline,
        heading: "Access to Top Talent",
        content: "Connect with highly qualified candidates across industries."
    },
    {
        icon: IoOptionsOutline,
        heading: "Effortless Integration",
        content: "Seamlessly integrate our platform with your existing HR tools for a  hiring experience."
    }

]


function AboutSection() {
    return (
        <StyledAboutSection>
            <StyledTitleWrapper>
                <StyledLogoBlock>
                    <IoInfinite size={36} className="brand-icon" />
                </StyledLogoBlock>
                <h1>Platform designed to simplify and enhance the hiring process.</h1>
                <p>With personalized solutions tailored to your business needs, we connect you with the best talent quickly and efficiently, helping you build stronger, more effective teams.</p>
                <Button>About Pixalytica</Button>
            </StyledTitleWrapper>
            <StyledCardWrapper>
                {CardData.map(card => (
                    <AboutCard key={card.heading} {...card} />
                ))}
            </StyledCardWrapper>
        </StyledAboutSection>
    )
}

export default AboutSection