const tabs = [
  { name: 'My Account', href: '#', current: false },
  { name: 'Company', href: '#', current: false },
  { name: 'Team Members', href: '#', current: true },
  { name: 'Billing', href: '#', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Tabs() {
  return (
    <div>
      <div className="sm:hidden flex justify-center">
        <select
          id="tabs"
          name="tabs"
          className="block w-[150px] h-[50px] bg-black focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md text-white bg-indigo-900 text-gray-200 px-4"
          defaultValue={tabs.find((tab) => tab.current).name}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <nav className="flex space-x-4 justify-center" aria-label="Tabs">
          {tabs.map((tab) => (
            <a
              key={tab.name}
              href={tab.href}
              className={classNames(
                tab.current
                  ? 'bg-indigo-900 text-gray-200'
                  : 'text-white hover:text-gray-400',
                'px-3 py-2 font-normal text-base rounded-md'
              )}
              aria-current={tab.current ? 'page' : undefined}
            >
              {tab.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
