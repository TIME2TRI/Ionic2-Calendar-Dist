import { EventEmitter, OnInit, TemplateRef } from '@angular/core';
import { CalendarService } from './calendar.service';
export interface IEvent {
    allDay: boolean;
    endTime: Date;
    startTime: Date;
    title: string;
}
export interface IRange {
    startTime: Date;
    endTime: Date;
}
export interface IView {
}
export interface IDayView extends IView {
    allDayEvents: IDisplayAllDayEvent[];
    rows: IDayViewRow[];
}
export interface IDayViewRow {
    events: IDisplayEvent[];
    time: Date;
}
export interface IMonthView extends IView {
    dates: IMonthViewRow[];
    dayHeaders: string[];
}
export interface IMonthViewRow {
    current?: boolean;
    date: Date;
    events: IEvent[];
    hasEvent?: boolean;
    label: string;
    secondary: boolean;
    selected?: boolean;
    disabled: boolean;
}
export interface IWeekView extends IView {
    dates: IWeekViewDateRow[];
    rows: IWeekViewRow[][];
    dayHeaders: string[];
}
export interface IWeekViewDateRow {
    date: Date;
    events: IDisplayEvent[];
}
export interface IWeekViewRow {
    events: IDisplayEvent[];
    time: Date;
}
export interface IDisplayEvent {
    endIndex: number;
    endOffset?: number;
    event: IEvent;
    startIndex: number;
    startOffset?: number;
    overlapNumber?: number;
    position?: number;
}
export interface IDisplayAllDayEvent {
    event: IEvent;
}
export interface ICalendarComponent {
    currentViewIndex: number;
    direction: number;
    eventSource: IEvent[];
    getRange: {
        (date: Date): IRange;
    };
    getViewData: {
        (date: Date): IView;
    };
    mode: CalendarMode;
    range: IRange;
    views: IView[];
    onDataLoaded: {
        (): void;
    };
    onRangeChanged: EventEmitter<IRange>;
}
export interface ITimeSelected {
    events: IEvent[];
    selectedTime: Date;
    disabled: boolean;
}
export interface IMonthViewDisplayEventTemplateContext {
    view: IView;
    row: number;
    col: number;
}
export interface IMonthViewEventDetailTemplateContext {
    selectedDate: ITimeSelected;
    noEventsLabel: string;
}
export interface IDateFormatter {
    formatMonthViewDay?: {
        (date: Date): string;
    };
    formatMonthViewDayHeader?: {
        (date: Date): string;
    };
    formatMonthViewTitle?: {
        (date: Date): string;
    };
    formatWeekViewDayHeader?: {
        (date: Date): string;
    };
    formatWeekViewTitle?: {
        (date: Date): string;
    };
    formatWeekViewHourColumn?: {
        (date: Date): string;
    };
    formatDayViewTitle?: {
        (date: Date): string;
    };
    formatDayViewHourColumn?: {
        (date: Date): string;
    };
}
export declare type CalendarMode = 'day' | 'month' | 'week';
export declare type QueryMode = 'local' | 'remote';
export declare type ScrollDirection = 'vertical' | 'horizontal';
export interface ICalendarConfig {
    mode?: CalendarMode;
    scrollDirection?: ScrollDirection;
    dir?: string;
    noEventsLabel?: string;
    allDayLabel?: string;
    queryMode?: QueryMode;
    locale?: string;
    formatHourColumn?: string;
    formatWeekViewDayHeader?: string;
    formatMonthTitle?: string;
    formatWeekTitle?: string;
    formatDayTitle?: string;
    formatDay?: string;
    spaceBetween?: number;
    startHour?: number;
    endHour?: number;
    startingDayMonth?: number;
    startingDayWeek?: number;
    autoSelect?: boolean;
    lockSwipes?: boolean;
    lockSwipesToPrev?: boolean;
    preserveScrollPosition?: boolean;
    scrollToHour?: number;
    showEventDetail?: boolean;
    formatDayHeader?: string;
    currentDate?: Date;
    onCurrentDateChanged?: any;
    onTimeSelected?: any;
    onRangeChanged?: any;
    onEventSelected?: any;
    onViewTitleChanged?: any;
    markDisabled?: any;
    dateFormatter?: any;
    eventSource?: any;
}
export declare enum Step {
    QuarterHour = 15,
    HalfHour = 30,
    Hour = 60,
}
export declare class CalendarComponent implements OnInit {
    private calendarService;
    private appLocale;
    currentDate: Date;
    eventSource: IEvent[];
    calendarMode: CalendarMode;
    formatDay: string;
    formatDayHeader: string;
    formatDayTitle: string;
    formatWeekTitle: string;
    formatMonthTitle: string;
    formatWeekViewDayHeader: string;
    formatHourColumn: string;
    showEventDetail: boolean;
    startingDayMonth: number;
    startingDayWeek: number;
    allDayLabel: string;
    noEventsLabel: string;
    queryMode: QueryMode;
    step: Step;
    autoSelect: boolean;
    markDisabled: (date: Date) => boolean;
    monthviewDisplayEventTemplate: TemplateRef<IMonthViewDisplayEventTemplateContext>;
    monthviewInactiveDisplayEventTemplate: TemplateRef<IMonthViewDisplayEventTemplateContext>;
    monthviewEventDetailTemplate: TemplateRef<IMonthViewEventDetailTemplateContext>;
    weekviewAllDayEventTemplate: TemplateRef<IDisplayAllDayEvent>;
    weekviewNormalEventTemplate: TemplateRef<IDisplayEvent>;
    dayviewAllDayEventTemplate: TemplateRef<IDisplayAllDayEvent>;
    dayviewNormalEventTemplate: TemplateRef<IDisplayEvent>;
    dateFormatter: IDateFormatter;
    dir: string;
    scrollDirection: string;
    scrollToHour: number;
    preserveScrollPosition: boolean;
    lockSwipeToPrev: boolean;
    lockSwipes: boolean;
    locale: string;
    startHour: number;
    endHour: number;
    spaceBetween: number;
    onCurrentDateChanged: EventEmitter<Date>;
    onRangeChanged: EventEmitter<IRange>;
    onEventSelected: EventEmitter<IEvent>;
    onTimeSelected: EventEmitter<ITimeSelected>;
    onTitleChanged: EventEmitter<string>;
    private _currentDate;
    private hourParts;
    private currentDateChangedFromChildrenSubscription;
    constructor(calendarService: CalendarService, appLocale: string);
    ngOnInit(): void;
    ngOnDestroy(): void;
    rangeChanged(range: IRange): void;
    eventSelected(event: IEvent): void;
    timeSelected(timeSelected: ITimeSelected): void;
    titleChanged(title: string): void;
    loadEvents(): void;
}
