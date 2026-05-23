import {DateTime} from 'luxon';

export const formattedEndDateString = (endDate: string): string => {
	const end = endDate === 'Present' ? DateTime.now() : DateTime.fromISO(endDate);
	return endDate === 'Present' ? endDate : end.toFormat('LLL y');
};

export const formatEndDateTime = (endDate: string): DateTime => {
	return endDate === 'Present' ? DateTime.now() : DateTime.fromISO(endDate);
};

export const formattedDateStringMonthAndYear = (dateString: string): string => {
	const date = DateTime.fromISO(dateString);
	return date.toFormat('LLL y');
};

type DurationArgs = {years: number; months: number};

export const buildDurationString = ({years, months}: DurationArgs): string => {
	const y = Math.round(years);
	const m = Math.round(months);
	const yearsString = y < 1 ? '' : (y === 1 ? `${y} Year` : `${y} Years`);
	const monthsString = m < 1 ? '' : (m === 1 ? `${m} Month` : `${m} Months`);
	return `${yearsString} ${monthsString}`;
};

export const formatDurationYearsMonths = (startDate: string, endDate: string): string => {
	const start = DateTime.fromISO(startDate);
	const end = formatEndDateTime(endDate);
	const workedDuration = end.diff(start, ['years', 'months']);
	return buildDurationString({years: workedDuration.years, months: workedDuration.months});
};
