import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Col, ConfigProvider, Row } from 'antd';
import locale from 'antd/lib/locale/zh_CN';
import classNames from 'classnames';
import { HolidayUtil, Lunar } from 'lunar-typescript';
import moment from 'moment';
import React, { useEffect, useMemo, useState } from 'react';
import { If } from '../if';
import MyCalendar from './calendar-local';
import './index.less';

const monthArr = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12',
];
const FULL_DATE = 'YYYY-MM-DD';
const DAY = 'DD';

// @ts-ignore
locale.DatePicker.lang = {
  ...locale?.DatePicker?.lang,
  monthFormat: 'M月',
  shortWeekDays: ['日', '一', '二', '三', '四', '五', '六'],
};

export function CalendarOverview() {
  useEffect(() => {
    moment.updateLocale('zh-cn', { week: { dow: 0 } });
  }, []);

  const [curYear, setCurYear] = useState<any>(moment().format('YYYY'));

  // const [holiday, setHoliday] = useState<string[]>([]); // 假期

  // const [workday, setWorkday] = useState<string[]>([]); // 加班日期

  const [selectArr] = useState<any[]>([moment().format(FULL_DATE)]); // 选中当天

  const CalendarDOM = useMemo(() => {
    return (
      <Row style={{ paddingBottom: 10 }}>
        {monthArr.map((item, index) => {
          return (
            <Col
              xxl={6}
              xl={8}
              lg={8}
              md={12}
              sm={12}
              key={index}
              style={{ padding: '4px 4px' }}
            >
              <ConfigProvider locale={locale}>
                <MyCalendar
                  fullscreen={false}
                  value={moment(`${curYear}-${item}`)}
                  disabledDate={(current) => {
                    const month = moment(current).format('MM');
                    return month !== item;
                  }}
                  fullCellRender={(date) => {
                    const d = Lunar.fromDate(date.toDate());
                    const lunar = d.getDayInChinese();
                    const solarTerm = d.getJieQi();
                    const h = HolidayUtil.getHoliday(
                      date.get('year'),
                      Number(date.get('month')) + 1,
                      date.get('date'),
                    );
                    const month = moment(date).format('MM');
                    // const isHoliday = holiday?.includes(
                    //   moment(date).format(FULL_DATE),
                    // );
                    const isHoliday = !!h && !h?.isWork();
                    const isSelect = selectArr.includes(
                      moment(date).format(FULL_DATE),
                    );
                    // const isWorkday = workday?.includes(
                    //   moment(date).format(FULL_DATE),
                    // );
                    const isWorkday = !!h && !!h?.isWork();
                    const text = moment(date).format(DAY);
                    // if (item !== month) return null; // 不渲染非当月的日期

                    const displayHoliday =
                      h?.getTarget() === h?.getDay() ? h?.getName() : undefined;

                    return (
                      <div className="calendar-day-content">
                        <div
                          className={classNames({
                            ['calendar-day-box']: true,
                            ['not-this-month-day']: item !== month,
                            ['is-holiday']: isHoliday,
                            ['is-select']: isSelect,
                            ['is-workday']: isWorkday,
                          })}
                        >
                          <div>{text}</div>
                          <div style={{ fontSize: 8 }}>
                            {displayHoliday || solarTerm || lunar}
                          </div>
                          <If isTrue={isHoliday}>
                            <span className="sign rest">休</span>
                          </If>
                          <If isTrue={isWorkday}>
                            <span className="sign workday">班</span>
                          </If>
                        </div>
                      </div>
                    );
                  }}
                  headerRender={({ value }) => {
                    return (
                      <div className="calendar-header">
                        {moment(value).format('MM月')}
                      </div>
                    );
                  }}
                />
              </ConfigProvider>
            </Col>
          );
        })}
      </Row>
    );
  }, [selectArr, curYear]);

  return (
    <div className="my-calendar-box">
      <div className="my-calendar-content">
        <div className="calendar-change-box">
          <div className="calendar-change__year">
            <LeftOutlined onClick={() => setCurYear(Number(curYear) - 1)} />
            <span style={{ margin: '0 12px' }}>{curYear}年</span>
            <RightOutlined
              onClick={() => {
                const isCurYear = `${moment().format('YYYY')}` === `${curYear}`;
                return isCurYear ? null : setCurYear(Number(curYear) + 1);
              }}
            />
          </div>
        </div>
        {CalendarDOM}
      </div>
    </div>
  );
}
