import moment from 'moment';

export const TIME_FRAMES = {
    today: { id: 'today', label: 'Today' },
    yesterday: { id: 'yesterday', label: 'Yesterday' },
    thisWeek: { id: 'thisWeek', label: 'This Week' },
    lastWeek: { id: 'lastWeek', label: 'Last Week' },
    thisMonth: { id: 'thisMonth', label: 'This Month' },
    lastMonth: { id: 'lastMonth', label: 'Last Month' },
    thisQuarter: { id: 'thisQuarter', label: 'This Quarter' },
    lastQuarter: { id: 'lastQuarter', label: 'Last Quarter' },
    yearToDate: { id: 'yearToDate', label: 'Year to Date' },
    lastYear: { id: 'lastYear', label: 'Last Year' },
    lastX: { id: 'lastX', label: 'Last...' },
    customRange: { id: 'customRange', label: 'Custom Range' },
};

export const TIME_FRAME_OPTIONS = [
    TIME_FRAMES.customRange,
    TIME_FRAMES.today,
    TIME_FRAMES.yesterday,
    TIME_FRAMES.thisWeek,
    TIME_FRAMES.lastWeek,
    TIME_FRAMES.thisMonth,
    TIME_FRAMES.lastMonth,
    TIME_FRAMES.thisQuarter,
    TIME_FRAMES.lastQuarter,
    TIME_FRAMES.yearToDate,
    TIME_FRAMES.lastYear,
    TIME_FRAMES.lastX,
];

export default function useTimeFrames() {
    const getTimeFrame = timeFrameId => {
        if (!timeFrameId || timeFrameId === TIME_FRAMES.customRange.id) {
            return null;
        }
        let startDate;
        let endDate;
        switch (timeFrameId) {
            case TIME_FRAMES.today.id:
                startDate = moment().startOf('day');
                endDate = moment().endOf('day');
                break;
            case TIME_FRAMES.yesterday.id:
                startDate = moment().subtract(1, 'days').startOf('day');
                endDate = moment().subtract(1, 'days').endOf('day');
                break;
            case TIME_FRAMES.thisWeek.id:
                startDate = moment().startOf('week');
                endDate = moment().endOf('week');
                break;
            case TIME_FRAMES.lastWeek.id:
                startDate = moment().subtract(1, 'weeks').startOf('week');
                endDate = moment().subtract(1, 'weeks').endOf('week');
                break;
            case TIME_FRAMES.thisMonth.id:
                startDate = moment().startOf('month');
                endDate = moment().endOf('month');
                break;
            case TIME_FRAMES.lastMonth.id:
                startDate = moment().subtract(1, 'months').startOf('month');
                endDate = moment().subtract(1, 'months').endOf('month');
                break;
            case TIME_FRAMES.thisQuarter.id:
                startDate = moment().startOf('quarter');
                endDate = moment().endOf('quarter');
                break;
            case TIME_FRAMES.lastQuarter.id:
                startDate = moment().subtract(1, 'quarters').startOf('quarter');
                endDate = moment().subtract(1, 'quarters').endOf('quarter');
                break;
            case TIME_FRAMES.yearToDate.id:
                startDate = moment().startOf('year');
                endDate = moment();
                break;
            case TIME_FRAMES.lastYear.id:
                startDate = moment().subtract(1, 'years').startOf('year');
                endDate = moment().subtract(1, 'years').endOf('year');
                break;
            default:
                break;
        }
        return { start: startDate?.toDate(), end: endDate?.toDate() };
    };

    const getLastXTimeFrame = (value, units) => {
        let startDate;
        let endDate;
        switch (units) {
            case 'days':
                startDate = moment().subtract(value, 'days').startOf('day');
                endDate = moment().endOf('day');
                break;
            case 'weeks':
                startDate = moment().subtract(value, 'weeks').startOf('week');
                endDate = moment().endOf('week');
                break;
            case 'months':
                startDate = moment().subtract(value, 'months').startOf('month');
                endDate = moment().endOf('month');
                break;
            case 'quarters':
                startDate = moment().subtract(value, 'quarters').startOf('quarter');
                endDate = moment().endOf('quarter');
                break;
            case 'years':
                startDate = moment().subtract(value, 'years').startOf('year');
                endDate = moment().endOf('year');
                break;
            default:
                break;
        }
        return { start: startDate?.toDate(), end: endDate?.toDate() };
    };

    return {
        getTimeFrame,
        getLastXTimeFrame,
        TIME_FRAMES,
        TIME_FRAME_OPTIONS,
    };
}
