import {DateTime} from 'luxon';

export const formattedEndDateString = endDate => {
	const end = DateTime.fromISO(endDate === 'Present' ? DateTime.now() : endDate);
	return endDate === 'Present' ? endDate : end.toFormat('LLL y');
};

export const formatEndDateTime = endDate => {
	const end = DateTime.fromISO(endDate === 'Present' ? DateTime.now() : endDate);
	return end;
};

export const formattedDateStringMonthAndYear = dateString => {
	const date = DateTime.fromISO(dateString);

	return date.toFormat('LLL y');
};

export const buildDurationString = ({years, months}) => {
	years = Math.round(years);
	months = Math.round(months);
	const yearsString = years < 1 ? '' : (years === 1 ? `${years} Year` : `${years} Years`);
	const monthsString = months < 1 ? '' : (months === 1 ? `${months} Month` : `${months} Months`);
	return `${yearsString} ${monthsString}`;
};

export const formatDurationYearsMonths = (startDate, endDate) => {
	const start = DateTime.fromISO(startDate);
	const end = formatEndDateTime(endDate);
	const workedDuration = end.diff(start, ['years', 'months']);

	const duration = buildDurationString({years: workedDuration.years, months: workedDuration.months});
	return duration;
};
