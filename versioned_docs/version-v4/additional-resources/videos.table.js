import React from "react";

// ----------------------------------------------------------------------------
// Please respect chronological (date) order when adding new entries.
// ----------------------------------------------------------------------------
export const videos = [
  {
    title: "Mastering PowerShell testing with Pester",
    author: "Mark Wragg",
    date: "2018-10-10",
    url: "https://www.youtube.com/watch?v=BbOiQCgDDR8",
    event: "PSDay.UK 2018",
  },
  {
    title: "Introduction to testing with Pester",
    author: "Jakub Jareš",
    date: "2017-04-08",
    url: "https://www.youtube.com/watch?v=F3oOk0BC9B4",
    event: "PowerShell UG Singapore",
  },
  {
    title: "Testing PowerShell with Pester",
    author: "Robert Cain",
    date: "2016-06-18",
    url: "https://www.pluralsight.com/courses/powershell-testing-pester",
    event: "",
  },
  {
    title: "Pester the Tester PowerShell Bugs Beware",
    author: "Robert Cain",
    date: "2016-06-14",
    url: "https://www.youtube.com/watch?v=o4ihc7atwYQ",
    event: "Mississippi PowerShell User Group",
  },
  {
    title: "Test-Driven Development with Pester",
    author: "June Blender",
    date: "2016-04-21",
    url: "https://www.youtube.com/watch?v=gssAtCeMOoo",
    event: "PowerShell Conference EU 2016",
  },
  {
    title: "Pester in Action - series",
    author: "Kevin Marquett",
    date: "2015-11-11",
    url: "https://www.youtube.com/playlist?list=PLOcTmsj9WHDo2_FfKePLaq_mJTcnW_fEJ",
    event: "",
  },
];

// ----------------------------------------------------------------------------
// PesterDataTable column definition
// ----------------------------------------------------------------------------
export const columns = [
  {
    header: "Title",
    accessorKey: "title",
    className: "pester-data-table left",
    cell: ({ cell, row: { original } }) => (
      <a href={`${original.url}`} target="blank" rel="noreferrer noopener">
        {cell.getValue()}
      </a>
    ),
  },
  {
    header: "Author",
    accessorKey: "author",
    className: "pester-data-table left",
  },
  {
    header: "Date",
    accessorKey: "date",
    className: "pester-data-table nowrap",
  },
  {
    header: "Event",
    accessorKey: "event",
    className: "pester-data-table left",
  },
];
