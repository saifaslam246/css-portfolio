import { HeadingWrapper, CardRow, CardColumn, MainCard } from "./Element";
import { TechnologyStackData } from "../../../utils/TechnolgyStackData";
function TechnologyStack() {
  return (
    <>
      <HeadingWrapper>My Technolgy Stack</HeadingWrapper>
      <CardRow>
        {TechnologyStackData.map((data) => {
          return (
            <>
              <CardColumn>
                <MainCard>
                  <img src={data?.image} alt="Profile image" />
                  <h1>{data?.name}</h1>
                  <p>{data?.description}</p>
                </MainCard>
              </CardColumn>
            </>
          );
        })}
      </CardRow>
    </>
  );
}
export default TechnologyStack;
