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
    {id: 'two_to_four_weeks', name: '2 to 4 weeks'},
    {id: 'more_than_four_weeks', name: 'More than 4 weeks'},
  ],
  time_per_week: [
    {id: 'less_than_10_hours', name: 'Less than 10 hours/week'},
    {id: 'ten_to_twenty_hours', name: '10-20 hours/week'},
    {id: 'more_than_twenty_hours', name: 'More than 20 hours/week'},
  ],
  countries: ['USA', 'Remote'],
};

export const jobsFields = {
  description: 'description',
  title: 'title',
  responsibilities: 'responsibilities',
  skills: 'skills',
  budget_type: 'budget_type',
  min_pay: 'min_pay',
  max_pay: 'max_pay',
  fixed_price: 'fixed_price',
  per_hour: 'per_hour',
  negotiable: 'negotiable',
  duration: 'duration',
  time: 'time',
  location: 'location',
};
