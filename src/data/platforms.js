const positions = [
  'absolute -top-2 flex flex-col items-center cursor-pointer z-10',
  'absolute top-16 right-4 sm:top-14 sm:right-12 flex flex-col items-center cursor-pointer z-10',
  'absolute bottom-12 right-6 sm:bottom-10 sm:right-16 flex flex-col items-center cursor-pointer z-10',
  'absolute bottom-12 left-6 sm:bottom-10 sm:left-16 flex flex-col items-center cursor-pointer z-10',
  'absolute top-16 left-4 sm:top-14 sm:left-12 flex flex-col items-center cursor-pointer z-10',
]

const scannerPositions = [
  'absolute -top-2 flex flex-col items-center cursor-pointer z-10',
  'absolute top-20 right-8 sm:top-20 sm:right-20 flex flex-col items-center cursor-pointer z-10',
  'absolute bottom-10 right-12 sm:bottom-10 sm:right-28 flex flex-col items-center cursor-pointer z-10',
  'absolute top-20 left-8 sm:top-20 sm:left-20 flex flex-col items-center cursor-pointer z-10',
]

export const platformTabs = {
  software: {
    label: 'BIM & Modeling Software',
    positions,
    items: [
      { label: 'Autodesk Revit', icon: 'fa-cube', hover: 'group-hover:border-brandRed group-hover:shadow-xl', color: 'text-brandRed' },
      { label: 'AutoCAD', icon: 'fa-compass-drafting', hover: 'group-hover:border-blue-600 group-hover:shadow-xl', color: 'text-blue-600' },
      { label: 'Navisworks', icon: 'fa-network-wired', hover: 'group-hover:border-amber-500 group-hover:shadow-xl', color: 'text-amber-500' },
      { label: 'ArcGIS Pro', icon: 'fa-layer-group', hover: 'group-hover:border-emerald-600 group-hover:shadow-xl', color: 'text-emerald-600' },
      { label: 'Civil 3D', icon: 'fa-building', hover: 'group-hover:border-indigo-600 group-hover:shadow-xl', color: 'text-indigo-600' },
    ],
  },
  formats: {
    label: 'Supported File Formats',
    positions,
    items: [
      { label: 'Autodesk Point Cloud (.RCP / .RCS)', text: 'RCP', hover: 'group-hover:border-brandRed group-hover:shadow-xl', color: 'text-brandRed' },
      { label: 'Universal Point Cloud (.E57)', text: 'E57', hover: 'group-hover:border-blue-600 group-hover:shadow-xl', color: 'text-blue-600' },
      { label: 'OpenBIM Exchange (.IFC)', text: 'IFC', hover: 'group-hover:border-emerald-600 group-hover:shadow-xl', color: 'text-emerald-600' },
      { label: 'GIS LiDAR Data (.LAS / .LAZ)', text: 'LAS', hover: 'group-hover:border-amber-500 group-hover:shadow-xl', color: 'text-amber-500' },
      { label: 'CAD Drawing (.DWG)', text: 'DWG', hover: 'group-hover:border-purple-600 group-hover:shadow-xl', color: 'text-purple-600' },
    ],
  },
  scanners: {
    label: 'Supported Scan Platforms',
    positions: scannerPositions,
    items: [
      { label: 'Leica Geosystems', icon: 'fa-camera', hover: 'group-hover:border-red-600 group-hover:shadow-xl', color: 'text-red-600' },
      { label: 'FARO Focus', icon: 'fa-bullseye', hover: 'group-hover:border-blue-500 group-hover:shadow-xl', color: 'text-blue-500' },
      { label: 'Matterport 3D', icon: 'fa-vr-cardboard', hover: 'group-hover:border-amber-500 group-hover:shadow-xl', color: 'text-amber-500' },
      { label: 'Trimble Geospatial', icon: 'fa-satellite', hover: 'group-hover:border-teal-600 group-hover:shadow-xl', color: 'text-teal-600' },
    ],
  },
}
