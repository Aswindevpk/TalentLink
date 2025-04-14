import styled from "styled-components";

const StyledRightColumn = styled.div`
  display: flex;
`;

const StyledCard = styled.div`
    background-color:var(--color-brand);
    height: 350px;
    padding: 2.4rem;
    border-radius:24px;
    display: flex;
    gap: 1rem;
    justify-content: space-between;

  @media (max-width: 1200px) {
    height: 100%;
    flex-direction: column;
  } 

  @media (max-width: 760px) {
    flex-direction: row;
    height: 320px;
    padding: 2rem;
  } 
`;

const StyledTextWrapper = styled.div`
     display: flex;
     flex-direction: column;
     gap: 2rem;
     width: 35%;
     justify-content: space-between;
     height: 100%;

  @media (max-width: 1200px) {
    width: 100%;
    flex-direction: column;
  } 

  @media (max-width: 760px) {
    width: 35%;
  } 

  p{
      color: var(--color-white);
      font-size: 1.4rem;
      font-weight:400;
      @media (max-width: 760px) {
        font-size: 1.2rem;
    } 
      span{
            color: var(--color-brand-light);
      }
    }
`;

const StyledHeader = styled.h2`
    color: var(--color-white);
    font-weight:400;

    span{
        color: var(--color-brand-light);
    }
    @media (max-width: 760px) {
        font-size: 1.8rem;
    } 
`;

const StyledOverlay = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    padding:2.4rem;
    top: 0; 
`;

const StyledBanner = styled.div`
    position: relative;
    z-index: 1;
    height: 390px;
    width: 300px;
    top: -4rem;
    background-color:white;
    border-radius:12px;
    border: 1px solid var(--color-grey-light);

    @media (max-width: 1200px) {
        width: 100%;
        top:0;
        flex-direction: column;
    }
    
    @media (max-width: 760px) {
        top: -4rem;
        height: 350px;
        width: auto;
    } 
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 10%;
  border-radius: 8px;
`;

const StyledTag = styled.span`
    padding: 0.2rem 1.2rem;
    font-size: clamp(1rem, 2vw, 1.6rem);
    border-radius:14rem;
    color: var(--color-brand);
    background-color: var(--color-grey-light); 
`;

const StyledOverlayText = styled.div`
     h3{
    color:var(--color-white);
    padding-bottom:0.4rem;
    }
    p{
        font-size: 14px;
        color:var(--color-white);
    } 
`;



function HeroRightColumn() {
    return (
        <StyledRightColumn>
            <StyledCard>
                <StyledTextWrapper>
                    <StyledHeader>Successfully connected over <span>1,000 businesses</span> with top talent.</StyledHeader>
                    <p><span>Reducing hiring time by 30%</span> and improving team efficiency across industries.</p>
                </StyledTextWrapper>
                <StyledBanner>
                    <StyledImage src="./model.webp" alt="Specialist" />
                    <StyledOverlay>
                        <div>
                            <StyledTag>Top rated specialist</StyledTag>
                        </div>
                        <StyledOverlayText>
                            <h3>Sarah Mitchell</h3>
                            <p>Talent Acqusition Specialist</p>
                        </StyledOverlayText>
                    </StyledOverlay>
                </StyledBanner>
            </StyledCard>
        </StyledRightColumn>
    )
}

export default HeroRightColumn