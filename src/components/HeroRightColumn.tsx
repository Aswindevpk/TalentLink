import styled from "styled-components";

const StyledRightColumn = styled.div`
  position: relative;
  z-index: -1;
`;

const StyledCard = styled.div`
  background-color:var(--color-brand);
  height: 375px;
  border-radius:24px;
`;

const StyledTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    padding: 2.4rem;
    justify-content: space-between;
    height: 100%;

    p{
        color: var(--color-white);
        font-size: 1.4rem;
        font-weight:400;
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
    position: absolute;
    top: -2rem;
    right: 2rem;
    background-color:white;
    border-radius:12px;
    border: 1px solid var(--color-grey-light);
    height: 410px;
    width: 310px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const StyledTag = styled.span`
    padding: 0.2rem 1.2rem;
    font-size: 14px;
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
            </StyledCard>
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
        </StyledRightColumn>
    )
}

export default HeroRightColumn