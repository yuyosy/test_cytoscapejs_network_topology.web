/**
 * @type {import('../cytoscape/types').ElementsDefinition}
 */
export const elements1 = {
  nodes: [
    // Groups
    { data: { id: 'group-tenant-side', label: 'Tenant-Side' } },
    { data: { id: 'group-internal-tenant-side', label: 'Internal-Tenant-Side' } },
    { data: { id: 'group-internal-cloud-side', label: 'Internal-Cloud-Side' } },
    { data: { id: 'group-cloud-side', label: 'Cloud-Side' } },

    // Nodes
    {
      data: {
        id: 'tenant-side-router-01',
        parent: 'group-tenant-side',
        label: 'Tenant-RT01',
        shape: 'ellipse',
        icon: 'router',
      },
      position: {
        x: 0,
        y: 200,
      },
    },
    {
      data: {
        id: 'internal-tenant-side-router-01',
        parent: 'group-internal-tenant-side',
        label: 'TN-RT01',
        shape: 'ellipse',
        icon: 'router',
      },
      position: {
        x: 200,
        y: 200,
      },
    },
    {
      data: {
        id: 'internal-cloud-side-router-01',
        parent: 'group-internal-cloud-side',
        label: 'PC-RT01',
        shape: 'ellipse',
        icon: 'router',
      },
      position: {
        x: 600,
        y: 200,
      },
    },
    {
      data: {
        id: 'cloud-side-router-01',
        parent: 'group-cloud-side',
        label: 'Cloud-01',
        shape: 'hexagon',
        icon: 'cloud',
      },
      position: {
        x: 800,
        y: 200,
      },
    },
  ],
  edges: [
    {
      data: {
        id: 'link-tenent01-tn01',
        label: '',
        source: 'tenant-side-router-01',
        target: 'internal-tenant-side-router-01',
        source_label: 'Gi0/0/1',
        target_label: 'Gi0/0/1',
      },
    },
    {
      data: {
        id: 'link-tnrt01-pcrt01',
        label: '',
        source: 'internal-tenant-side-router-01',
        target: 'internal-cloud-side-router-01',
        source_label: 'Gi0/0/0',
        target_label: 'Gi0/0/0',
      },
    },
    {
      data: {
        id: 'link-pcrt01-cloud01',
        label: '',
        source: 'internal-cloud-side-router-01',
        target: 'cloud-side-router-01',
        source_label: 'Gi0/0/1',
        target_label: 'Gi0/0/1',
      },
    },
  ],
};
