import styled from "styled-components";

const StyledContainer = styled.div`
    padding: 8rem 0rem;
    display: flex;
`;


const StyledServicesSection = styled.div`
    min-width: 850px;
    margin: auto;
    gap: 2rem;
`;

const StyledTitleWrapper = styled.div`
    max-width: 550px;
    display: flex;
    flex-direction:column;
    gap: 2rem;
    margin-bottom:4rem;
`;

const StyledTag = styled.span`
    background-color: var(--color-grey-light);
    padding: 0.4rem 0.8rem;
    border-radius:16px;
    color:var(--color-brand);
`;

function ServicesSection() {
    return (
        <StyledContainer>
            <StyledServicesSection>
                <StyledTitleWrapper>
                    <div>
                        <StyledTag>Our Services</StyledTag>
                    </div>
                    <h1>Platform that matches businesses with top-tier talent.</h1>
                    <p>Our tailored approach integrates seamlessly with your existing systems, ensuring a smooth experience from start to finish.</p>
                </StyledTitleWrapper>
            </StyledServicesSection>
        </StyledContainer>
    )
}

export default ServicesSection