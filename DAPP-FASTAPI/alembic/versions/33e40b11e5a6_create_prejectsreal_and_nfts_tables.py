"""create prejectsreal and nfts tables

Revision ID: 33e40b11e5a6
Revises: 85084747db43
Create Date: 2023-01-18 16:23:43.005567

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '33e40b11e5a6'
down_revision = '85084747db43'
branch_labels = None
depends_on = None


def upgrade() -> None:
        op.add_column(
            "nft",
            sa.Column('project_id', sa.INTEGER, sa.ForeignKey('projectsreal.id'))
        )


def downgrade() -> None:
    pass
