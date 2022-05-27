import ReactPlaceholder from "react-placeholder/lib";
import { TextBlock, RoundShape } from "react-placeholder/lib/placeholders";
import Explanation from "./Explanation";

const ReactPlaceholderInfo = () => (
  <>
    <Explanation leading="type='media' rows={10}">
      <ReactPlaceholder ready={false} rows={10} type="media" showLoadingAnimation>
        {null}
      </ReactPlaceholder>
    </Explanation>
    <Explanation leading="type='rect' rows={10}">
      <ReactPlaceholder ready={false} rows={10} type="rect" showLoadingAnimation>
        {null}
      </ReactPlaceholder>
    </Explanation>
    <Explanation leading="type='text' rows={10}">
      <ReactPlaceholder ready={false} rows={10} type="text" showLoadingAnimation>
        {null}
      </ReactPlaceholder>
    </Explanation>
    <Explanation leading="type='round' rows={10}">
      <ReactPlaceholder ready={false} rows={10} type="round" showLoadingAnimation>
        {null}
      </ReactPlaceholder>
    </Explanation>
    <Explanation leading="Custom placeholder">
      <ReactPlaceholder ready={false} showLoadingAnimation customPlaceholder={
        <div className='my-awesome-placeholder'>
          <RoundShape style={{width: 80, height: 80}} color='lightgray' />
          <TextBlock rows={7} color='lightgray' />
        </div>
      }>
        {null}
      </ReactPlaceholder>
    </Explanation>
  </>
);

export default ReactPlaceholderInfo;
