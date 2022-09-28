const ANCHOR_CLASSNAMES = 'mx-5 hover:font-bold';

const PageHead = () => {
  return (
    <header className="flex justify-between flex-row w-full pt-4">
      <h2 className="font-title font-bold text-4xl ml-14">Filtrip.</h2>
      <div className="mr-14 flex items-center">
        <a className={ANCHOR_CLASSNAMES}>Map</a>
        <a className={ANCHOR_CLASSNAMES}>About</a>
        <a className="mx-5">Advertise</a>
      </div>
    </header>
  );
};

export default PageHead;
