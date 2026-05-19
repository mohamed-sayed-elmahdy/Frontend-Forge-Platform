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

export default function UserBreadcrumbs() {
    const pathname = usePathname();
    const t = useTranslations();

    const pathSegments = pathname.split('/').filter(segment => segment && segment !== 'admin' && segment !== 'dashboard');
    const breadcrumbSegments = pathSegments.map(segment => ({
        original: segment,
        formatted: t.has(`user.userBreadcrumbs.${segment}`)
            ? t(`user.userBreadcrumbs.${segment}`)
            : segment.replace(/-/g, " ")
    }));


    return (
        <>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        {breadcrumbSegments.length > 0 ? <BreadcrumbLink href="/dashboard">{t('user.userBreadcrumbs.userDashboard')}</BreadcrumbLink>
                            : <BreadcrumbPage>{t('user.userBreadcrumbs.userDashboard')}</BreadcrumbPage>}
                    </BreadcrumbItem>
                    {breadcrumbSegments ? breadcrumbSegments.map((segment, index) => (
                        <Fragment key={index}>
                            <BreadcrumbSeparator className="rtl:rotate-180" />
                            <BreadcrumbItem className="capitalize">
                                {index === breadcrumbSegments.length - 1 ? <BreadcrumbPage>{segment.formatted}</BreadcrumbPage>
                                    : <BreadcrumbLink href={`/dashboard/${segment.original}`}>{segment.formatted}</BreadcrumbLink>}
                            </BreadcrumbItem>
                        </Fragment>
                    )) : null}
                </BreadcrumbList>
            </Breadcrumb>
        </>
    );
}