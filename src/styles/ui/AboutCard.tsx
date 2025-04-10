import styled from "styled-components";

const StyledCard = styled.div`
    width: 280px;
    height: 300px;
    background-image: linear-gradient(180deg, var(--color-white) 40%, #fff0);
    border: 2px solid var(--color-grey-light);
    border-radius:1.6rem;
    padding: 2.4rem;
`;

const StyledLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.8rem;
    background-color: var(--color-brand);
    border-radius:8px;
    width: fit-content;
    border: 1px solid var(--color-grey-light);
    .about-logo{
        color: var(--color-brand-light);
    }
`;

const StyledHeading = styled.h2`
    margin-top:3.8rem;
    font-size: 20px;
`;

const StyledPara = styled.p`
    margin-top:1.2rem;
    font-size: 14px;
`;

interface Props{
    icon:React.ElementType;
    heading:string,
    content:string,
}

function AboutCard({icon:Icon,heading,content}:Props) {
    return (
        <StyledCard>
            <StyledLogo>
                <Icon size={26} className="about-logo" />
            </StyledLogo>
            <StyledHeading>
                {heading}
            </StyledHeading>
            <StyledPara>
                {content}
            </StyledPara>
        </StyledCard>
    )
}

export default AboutCard