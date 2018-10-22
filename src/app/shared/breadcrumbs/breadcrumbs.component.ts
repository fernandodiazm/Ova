import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, distinctUntilChanged } from 'rxjs/operators';
import { BreadCrumb } from './bread-crumb';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {
  breadcrumbs$ = this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    distinctUntilChanged(),
    map(event => this.buildBreadCrumb(this.activatedRoute.root))
  );

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {}

  buildBreadCrumb(
    route: ActivatedRoute,
    url: string = '',
    breadcrumbs: Array<BreadCrumb> = []
  ): Array<BreadCrumb> {
    const label = route.routeConfig
      ? route.routeConfig.data['breadcrumb']
      : 'Home';
    const path = route.routeConfig ? route.routeConfig.path : '';
    const nextUrl = `${url}${path}/`;
    const breadcrumb = { label: label, url: nextUrl };
    const newBreadcrumbs = [...breadcrumbs, breadcrumb];

    if (route.firstChild) {
      return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
    }
    return newBreadcrumbs;
  }
}

