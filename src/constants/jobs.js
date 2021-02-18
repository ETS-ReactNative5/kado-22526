export const JOBS_ENUM = {
  work_types: [
    {id: 'full_time', name: 'Full-time'},
    {id: 'part_time', name: 'Part-time'},
    {
      id: 'remote',
      name: 'Remote',
    },
    {
      id: 'short_term_project',
      name: 'Short-term Project',
    },
    {
      id: 'long_term_project',
      name: 'Long-term Project',
    },
  ],
  availability_duration: [
    {id: 'less_than_two_weeks', name: 'Less than 2 weeks'},
    {id: 'two_to_four_weeks', name: '2-4 weeks'},
    {id: 'more_than_four_weeks', name: 'More than 4 weeks'},
  ],
  time_per_week: [
    {id: 'less_than_10_hours', name: 'Less than 10 hours'},
    {id: 'ten_to_twenty_hours', name: '10-20 hours'},
    {id: 'more_than_20_hours', name: 'More than 20 hours'},
  ],
};
