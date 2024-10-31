import { Calendar } from 'antd';
import type { Moment } from 'moment';

import momentGenerateConfig from 'rc-picker/es/generate/moment';

const MyCalendar = Calendar.generateCalendar<Moment>(momentGenerateConfig);

export default MyCalendar;
