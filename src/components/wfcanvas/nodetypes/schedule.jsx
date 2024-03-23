import { DEFAULT_THEME } from './theme';
import NodeWrapper from './nodewrapper';

const ScheduleNode = ({ data }) => (
  <NodeWrapper data={data}>
      <span className="inline-block ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke={DEFAULT_THEME.ICON_COLOR} className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </span>
  </NodeWrapper>
);

export default ScheduleNode;
