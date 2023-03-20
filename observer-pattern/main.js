import Subject from './Subject.js';
import Observer from './Observer.js';

const subject = Subject();
const observer1 = Observer();
const observer2 = Observer();

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.setState(1); // Subject's state has changed to 1
