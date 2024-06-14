import {TemplateRef} from "@angular/core";

export type CalendarTemplate = TemplateRef<any>;

export type CustomComponents = {
  timeGridEvent?: CalendarTemplate
  dateGridEvent?: CalendarTemplate
  monthGridEvent?: CalendarTemplate
  monthAgendaEvent?: CalendarTemplate
  eventModal?: CalendarTemplate
}
export type CustomComponentMeta = {
  Component: CalendarTemplate
  wrapperElement: HTMLElement
  props: Record<string, unknown>
  componentName: keyof CustomComponents
}
export type CustomComponentsMeta = CustomComponentMeta[]
