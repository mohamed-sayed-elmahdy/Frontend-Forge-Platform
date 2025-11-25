"use client"
import { Fragment } from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { usePathname } from "next/navigation";

import { useTranslations } from "next-intl";

export default function AdminBreadcrumbs() {
    const pathname = usePathname();
    const t = useTranslations();

    const pathSegments = pathname.split('/').filter(segment => segment && segment !== 'admin' && segment !== 'dashboard');
    const breadcrumbSegments = pathSegments.map(segment => ({
        original: segment,
        formatted: t(`adminBreadcrumbs.${segment}`) || segment.replace(/([A-Z])/g, (m, p, offset) => (offset === 0 ? m : ' ' + m))
    }));


    return (
        <>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        {breadcrumbSegments.length > 0 ? <BreadcrumbLink href="/admin/dashboard">{t('adminBreadcrumbs.adminDashboard')}</BreadcrumbLink>
                            : <BreadcrumbPage>{t('adminBreadcrumbs.adminDashboard')}</BreadcrumbPage>}
                    </BreadcrumbItem>
                    {breadcrumbSegments ? breadcrumbSegments.map((segment, index) => (
                        <Fragment key={index}>
                            <BreadcrumbSeparator className="rtl:rotate-180" />
                            <BreadcrumbItem className="capitalize">
                                {index === breadcrumbSegments.length - 1 ? <BreadcrumbPage>{segment.formatted}</BreadcrumbPage>
                                    : <BreadcrumbLink href={`/admin/dashboard/${segment.original}`}>{segment.formatted}</BreadcrumbLink>}
                            </BreadcrumbItem>
                        </Fragment>
                    )) : null}
                </BreadcrumbList>
            </Breadcrumb>
        </>
    );
}