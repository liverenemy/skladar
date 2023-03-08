// eslint-disable-next-line import/no-extraneous-dependencies
import {Catalog} from 'react-planner';

/* eslint-disable import/extensions */

import * as Areas from './areas/area/planner-element.jsx';

import * as Door from './holes/door/planner-element.jsx';
import * as DoorDouble from './holes/door-double/planner-element.jsx';
import * as Gate from './holes/gate/planner-element.jsx';
import * as PanicDoor from './holes/panic-door/planner-element.jsx';
import * as PanicDoorDouble from './holes/panic-door-double/planner-element.jsx';
import * as SashWindow from './holes/sash-window/planner-element.jsx';
import * as SlidingDoor from './holes/sliding-door/planner-element.jsx';
import * as VenetianBlindWindow from './holes/venetian-blind-window/planner-element.jsx';
import * as Window from './holes/window/planner-element.jsx';
import * as WindowCurtain from './holes/window-curtain/planner-element.jsx';

import * as Wall from './lines/wall/planner-element.jsx';

import * as AirConditioner from './items/air-conditioner/planner-element.jsx';
import * as ArmChairs from './items/armchairs/planner-element.jsx';
import * as Balcony from './items/balcony/planner-element.jsx';
import * as Bench from './items/bench/planner-element.jsx';
import * as BlackBoard from './items/blackboard/planner-element.jsx';
import * as BookCase from './items/bookcase/planner-element.jsx';
import * as Camera from './items/camera/planner-element.jsx';
import * as CanteenTable from './items/canteen-table/planner-element.jsx';
import * as CanteenCart from './items/canteencart/planner-element.jsx';
import * as Chair from './items/chair/planner-element.jsx';
import * as ChairDesk from './items/chairdesk/planner-element.jsx';
import * as ChildChairDesk from './items/child-chair-desk/planner-element.jsx';
import * as CleaningCard from './items/cleaningcart/planner-element.jsx';
import * as CoatHook from './items/coat-hook/planner-element.jsx';
import * as Column from './items/column/planner-element.jsx';
import * as ColumnSquare from './items/column-square/planner-element.jsx';
import * as Cube from './items/cube/planner-element.jsx';
import * as Desk from './items/desk/planner-element.jsx';
import * as DeskDouble from './items/deskdouble/planner-element.jsx';
import * as DeskOffice from './items/deskoffice/planner-element.jsx';
import * as ElectricalPanel from './items/electrical-panel/planner-element.jsx';
import * as FireExtinguisher from './items/fire-extinguisher/planner-element.jsx';
import * as Fridge from './items/fridge/planner-element.jsx';
import * as Hanger from './items/hanger/planner-element.jsx';
import * as Hiroos from './items/hiroos/planner-element.jsx';
import * as Hub from './items/hub/planner-element.jsx';
import * as Image from './items/image/planner-element.jsx';
import * as Kitchen from './items/kitchen/planner-element.jsx';
import * as Lim from './items/lim/planner-element.jsx';
import * as MetalDetector from './items/metal-detector/planner-element.jsx';
import * as MonitorPc from './items/monitor-pc/planner-element.jsx';
import * as Naspo from './items/naspo/planner-element.jsx';
import * as Projector from './items/projector/planner-element.jsx';
import * as RadiatorModernStyle from './items/radiator-modern-style/planner-element.jsx';
import * as RadiatorOldStyle from './items/radiator-old-style/planner-element.jsx';
import * as RecyclingBins from './items/recycling-bins/planner-element.jsx';
import * as RouterWifi from './items/router-wifi/planner-element.jsx';
import * as Schneider from './items/schneider/planner-element.jsx';
import * as SchoolDesk from './items/school-desk/planner-element.jsx';
import * as SchoolDeskDouble from './items/school-desk-double/planner-element.jsx';
import * as SimpleStair from './items/simple-stair/planner-element';
import * as Sink from './items/sink/planner-element.jsx';
import * as SmokeDetector from './items/smoke-detector/planner-element.jsx';
import * as Sofa from './items/sofa/planner-element.jsx';
import * as Table from './items/table/planner-element.jsx';
import * as TeachingPost from './items/teaching-post/planner-element.jsx';
import * as Text3d from './items/text-3d/planner-element.jsx';
import * as ThreePhasePanel from './items/three-phase-panel/planner-element.jsx';
import * as Trash from './items/trash/planner-element.jsx';
import * as Tv from './items/tv/planner-element.jsx';
import * as UmbrellaStand from './items/umbrella-stand/planner-element.jsx';
import * as Wardrobe from './items/wardrobe/planner-element.jsx';

const catalog = new Catalog();

const register = (elements) => {
    elements.forEach(
        (element) => {
            Object.keys(element).map(
                (
                    key
                    // eslint-disable-next-line array-callback-return
                ) => {
                    catalog.registerElement(element[key]);
                }
            )
        }
    );
};
// catalog.registerElement(Areas);
// catalog.registerElement(Wall);
// register(Areas);
// register(Wall);
for( let x in Areas ) catalog.registerElement( Areas[x] );
for( let x in Wall ) catalog.registerElement( Wall[x] );

register([
    Door,
    DoorDouble,
    Gate,
    PanicDoor,
    PanicDoorDouble,
    SashWindow,
    SlidingDoor,
    VenetianBlindWindow,
    Window,
    WindowCurtain,
]);

register([
    AirConditioner,
    ArmChairs,
    Balcony,
    Bench,
    BlackBoard,
    BookCase,
    Camera,
    CanteenTable,
    CanteenCart,
    Chair,
    ChairDesk,
    ChildChairDesk,
    CleaningCard,
    CoatHook,
    Column,
    ColumnSquare,
    Cube,
    Desk,
    DeskDouble,
    DeskOffice,
    ElectricalPanel,
    FireExtinguisher,
    Fridge,
    Hanger,
    Hiroos,
    Hub,
    Image,
    Kitchen,
    Lim,
    MetalDetector,
    MonitorPc,
    Naspo,
    Projector,
    RadiatorModernStyle,
    RadiatorOldStyle,
    RecyclingBins,
    RouterWifi,
    Schneider,
    SchoolDesk,
    SchoolDeskDouble,
    SimpleStair,
    Sink,
    SmokeDetector,
    Sofa,
    Table,
    TeachingPost,
    Text3d,
    ThreePhasePanel,
    Trash,
    Tv,
    UmbrellaStand,
    Wardrobe,
]);

catalog.registerCategory(
    'windows',
    'Windows',
    [
        Window.default,
        SashWindow.default,
        VenetianBlindWindow.default,
        WindowCurtain.default,
    ]
);

catalog.registerCategory(
    'doors',
    'Doors',
    [
        Door.default,
        DoorDouble.default,
        PanicDoor.default,
        PanicDoorDouble.default,
        SlidingDoor.default,
    ]
);

export default catalog;
