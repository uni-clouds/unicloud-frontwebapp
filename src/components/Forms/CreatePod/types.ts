export interface CreatePodProps {
  handleClose: () => void
}

export interface PodType {
  name: string
  location: string
  type: string
  url_base: string
  pod_user: string
  pod_password: string
  project_id: string
}
